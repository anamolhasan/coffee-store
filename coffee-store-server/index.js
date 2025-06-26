require('dotenv').config()
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
// const { CURSOR_FLAGS } = require('mongodb');
const app = express();
const port = process.env.PORT ||3000


app.use(cors())
app.use(express.json())


// coffee_monster
// HfpUXeKjgLoXF30y




// const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.0ksef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.0ksef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const coffeeCollection = client.db('coffeeDB').collection('coffees')
    const usersCollection = client.db('coffeeDB').collection('users')


    app.get('/coffees', async(req, res) => {
      const allCoffees = await coffeeCollection.find().toArray()
      res.send(allCoffees)
    })

    app.get('/coffee/:id', async(req, res) => {
      const id = req.params.id
      const filter = {_id: new ObjectId(id)}
      const result = await coffeeCollection.findOne(filter)
      res.send(result)
    })

    app.get('/my-coffee/:email', async(req, res) => {
      const email = req.params.email
      const filter = {email: email }
      const result = await coffeeCollection.find(filter).toArray()
      res.send(result)
    })

     app.post('/add-coffee', async(req, res) => {
      const coffeeData = req.body
      const result = await coffeeCollection.insertOne(coffeeData)
      res.status(201).send({...result, message: 'Data paisi vai, thank'})
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
    console.log(`Coffee server is running on port http://localhost:${port}`)
})