import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useLoaderData } from "react-router";
import axios from "axios";

const CoffeeDetails = () => {
  const { user } = use(AuthContext);

  const { data} = useLoaderData();
  const [coffee, setCoffee] = useState(data)

  // console.log(coffee);
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
  // console.log(details);

  const [liked, setLiked] = useState(likeBy.includes(false));
  const [likeCount, setLikeCount] = useState(likeBy?.length);

  useEffect(() => {
    setLiked(likeBy.includes(user?.email));
  }, [likeBy, user]);

  // handle like/dislike
  const handleLike = () => {
    if (user?.email === email) return alert("lojja kore na ?");

    // handle like toggle api fetch call
    axios
      .patch(`${import.meta.env.VITE_API_URL}/like/${_id}`, {
        email: user?.email,
      })
      .then((data) => {
        console.log(data?.data);
        const isLiked = data?.data?.liked;
        // update liked state
        setLiked(isLiked);

        // update liked count state
        setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle order
  const handleOrder = () => {
    if (user?.email === email) return alert("thomar nijer coffee");
    const orderInfo = {
      coffeeId: _id,
      customerEmail: user?.email,
    };

    //  save order info
    axios.post(`${import.meta.env.VITE_API_URL}/place-order/${_id}`, orderInfo)
        .then(data => {
           console.log(data.data)
           setCoffee(prev => {
            return {...prev, quantity : prev.quantity -1}
           })
        })
        .catch(error => {
          console.log(error)
        })
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
          <p>Likes: {likeCount}</p>
          <div className="flex gap-5">
            <button onClick={handleOrder} className="btn btn-primary">order</button>
            <button onClick={handleLike} className="btn btn-secondary">
              👍 {liked ? "Liked" : " Like "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
