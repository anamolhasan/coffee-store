const express = require('express');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
// const { CURSOR_FLAGS } = require('mongodb');
const app = express();
const port = process.env.PORT ||3000


app.use(cors())
app.use(express.json())


// coffee_monster
// HfpUXeKjgLoXF30y




const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.0ksef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.0ksef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const coffeeCollection = client.db('coffeeDB').collection('coffees')
    const usersCollection = client.db('coffeeDB').collection('users')


    app.get('/coffees', async (req, res) => {
      // const cursor = coffeeCollectin.find()
      // const result  = await cursor.toArray()
      const result = await coffeeCollection.find().toArray()
      res.send(result)
    })

     app.get('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await coffeeCollection.findOne(query);
            res.send(result);
        })

     app.post('/coffees', async (req, res)=>{
        const newCoffee = req.body;
        console.log(newCoffee)

        const result = await coffeeCollection.insertOne(newCoffee)
        res.send(result)
        
     })

     app.put('/coffees/:id', async (req, res) => {
      const id  = req.params.id 
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true}
      const updateCoffee = req.body
      const updateDoc = {
        $set:updateCoffee
      }

      // const updateDoc = {
      //   $set:{
      //     name:updateCoffee.name,
      //     supplier:updateCoffee.supplier
      //   }
      // } 
      
      const result  = await coffeeCollection.updateOne(filter, updateDoc, options)
      res.send(result)
     })

     app.delete('/coffees/:id', async (req, res)=> {
       const id = req.params.id 
       const query = {_id: new ObjectId(id)}
       const result = await coffeeCollection.deleteOne(query)
       res.send(result)
     })


    //  User related APIs
    app.post('/users', async (req, res) => {
      const usersProfile = req.body
      console.log(usersProfile)

      const result  = await usersCollection.insertOne(usersProfile)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Coffee server is getting hotter!') 
})


app.listen(port, ()=>{
    console.log(`Coffee server is running on port ${port}`)
})