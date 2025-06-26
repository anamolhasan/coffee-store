import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useLoaderData } from "react-router";



const CoffeeDetails = () => {
  const { user } = use(AuthContext);

 const {data : coffee} = useLoaderData()
  
  console.log(coffee)
  const {
    _id,
    photo,
    quantity,
    supplier,
    taste,
    name,
    price,
    details,
    email,
    likeBy,
  } = coffee || {};
  console.log(likeBy)
  

  const [liked, setLiked] = useState(likedBy.includes(user?.email));
  const [likeCount, setLikeCount] = useState(likedBy?.length);

  // handle like/dislike
  const handleLike = () => {
    if (user?.email === email.email) return alert("Lojja korena?");
  
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around items-center py-12">
        <div className="flex-1">
          <img className="w-full" src={photo} alt="" />
        </div>
        <div className="flex-1">
          <p>Name : {name}</p>
          <p>Details : {details}</p>
          <p>Quantity: {quantity}</p>
          <p>Likes: {likeBy?.length}</p>
          <div className="flex gap-5">
            <button className="btn btn-primary">order</button>
            <button onClick={handleLike} className="btn btn-secondary">Like</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
