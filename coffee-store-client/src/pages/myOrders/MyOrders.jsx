import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import OrderCard from "./OrderCard";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/my-orders/${user?.email}`)
      .then((data) => {
        console.log(data?.data);
        setOrders(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  return (
   <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-16'>
       {/* coffee card */}
       {
        orders.map(coffee => (
          <OrderCard key={coffee._id} coffee={coffee}/>
        ))
       }
      </div>
    </div>
  );
};

export default MyOrders;
