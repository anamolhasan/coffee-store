import React, { useState } from 'react'

import { useLoaderData } from 'react-router'
import CoffeeCard from '../Coffees/CoffeeCard'


const Home = () => {
  const initialCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(initialCoffees)
 
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-16'>
        {
          coffees.map(coffee => <CoffeeCard 
            key={coffee._id} 
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee} />)
        }
      </div>
    </div>
  )
}

export default Home