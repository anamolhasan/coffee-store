import { useState } from "react"
import { useLoaderData } from "react-router"
import CoffeeCard from "./CoffeeCard"

const MyAddedCoffee = () => {
  
const initialCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(initialCoffees?.data || [])
 
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-16'>
       {/* coffee card */}
       {
        coffees.map(coffee => (
          <CoffeeCard key={coffee._id} coffee={coffee}/>
        ))
       }
      </div>
    </div>
  )
}

export default MyAddedCoffee