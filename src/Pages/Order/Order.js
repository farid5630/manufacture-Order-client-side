import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Order = () => {
    const id = useParams();
    const [user] =  useAuthState(auth)
    const [orderPart, setOrderPart] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
const { name, img, description, price, availabalQuantity, minimumOrder } =
    orderPart;
  
  
     useEffect(() => {
       fetch(`http://localhost:5000/parts/${id.id}`)
         .then((res) => res.json())
         .then((data) => setOrderPart(data));
     }, [id]);
    
    
    const inputQuantity = (e) => {
        const value = e.target.value;
        if (value < availabalQuantity || value < minimumOrder) {
            setIsDisabled(true);
        }
  }
  

    const handleOrder = () => {
      const order = {
          email:user.email, name:name, img:img, quantity:minimumOrder, price:price*minimumOrder
      }
      console.log(order);
      fetch('http://localhost:5000/order', {
        method: "POST",
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(order)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
      })
  }
  
    
    return (
      <div>
        <h1 className="text-3xl text-center text-cyan-500 my-3">{name}</h1>
        <div className="card w-96 bg-base-100 m-auto shadow-xl flex flex-col justify-center">
          <figure className="px-10 pt-10 ">
            <div className="flex justify-center">
              <img src={img} alt="part" className="rounded-xl mx-auto" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <p className="">{description}</p>
            <h1 className="font-bold ">Per PCS: {price}</h1>
            <p className="font-bold ">
              Available Quantity: {availabalQuantity}
            </p>
            <p className="font-bold ">Minimum Order: {minimumOrder}</p>
            <div className="card-actions mt-2">
              <input
                type="number"
                placeholder="parts Quantity"
                onChange={inputQuantity}
                className="p-2 border-2  border-cyan-500 rounded focus:outline-0"
              />
              <button
                className={`btn btn-primary uppercase disabled ${isDisabled && 'disabled'}`}
                            onClick={handleOrder}
              >
                order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Order;