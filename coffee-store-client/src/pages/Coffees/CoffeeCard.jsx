import React from 'react'
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, photo, quantity, supplier, taste, name, price } = coffee


    const handleDelete = (_id) => {
      
        
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm border-2 p-5">
                <figure>
                    <img src={photo} alt="Movie" />
                </figure>
                <div className="flex justify-around w-full mt-10">
                    <div className='space-y-4'>
                        <h2 className="">{name}</h2>
                        <p>Price : {price}</p>
                        <p>Quantity : {quantity}</p>
                    </div>
                </div>
                <div className='card-actions justify-end mr-5'>
                    <div className="join join-vertical space-y-4">
                        <Link to={`/coffee/${_id}`}>
                            <button className="btn join-item">View</button>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item">Edite</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard