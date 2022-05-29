import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Order = () => {
  const id = useParams();
  const [user] = useAuthState(auth);
  // const [orderPart, setOrderPart] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(0);
  // const { name, img, description, price, availabalQuantity, minimumOrder } =
  //   orderPart;

  
   const {
      data: orderPart,
      isLoading,
      refetch,
    } = useQuery("orderPart", () =>
      fetch(`http://localhost:5000/order/${id.id}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );
    if (isLoading) {
      return <Loading></Loading>;
}
    const { name, img, description, price, availabalQuantity, minimumOrder } =
    orderPart;
   
/**
  useEffect(() => {
    fetch(`http://localhost:5000/order/${id.id}`)
      .then((res) => res.json())
      .then((data) => setOrderPart(data));
  }, [id]);
 */
  

  const inputQuantity = (e) => {
    setOrderQuantity(e.target.value);
    const num = Number(e.target.value);
    if (minimumOrder <= num) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    if (num <= availabalQuantity) {
    } else {
      setIsDisabled(true);
    }
  };

  const handleOrder = () => {
    const order = {
      userName: user?.displayName,
      email: user?.email,
      name: name,
      img: img,
      quantity: orderQuantity,
      price: price * orderQuantity,
      status: "unpaid",
    };

    fetch("http://localhost:5000/myorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);

        const updateQuantity = availabalQuantity - orderQuantity;

        if (data.result.insertedId) {
          
             fetch(`http://localhost:5000/order/${id.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
               },
               body: JSON.stringify({ avilableQuantity: updateQuantity }),
          
        })
          .then((res) => {
            if (res.status === 403) {
              toast.error("Order not successfully");
            }
            return res.json();
          })
               .then((data) => {           
                 if (data.massage.modifiedCount > 0) {                   
                   toast.success(`Order Successfully`);
                   setOrderQuantity(' ')
                   refetch();
                 }
          });
        }
      });
  };

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
          <p className="font-bold ">Available Quantity: {availabalQuantity}</p>
          <p className="font-bold ">Minimum Order: {minimumOrder}</p>
          <div className="card-actions mt-2">
            <input
              type="number"
              placeholder="parts Quantity"
              onChange={inputQuantity}
              className="p-2 border-2  border-cyan-500 rounded focus:outline-0"
            />
            <button
              disabled={isDisabled}
              className={`btn btn-primary uppercase disabled
              }`}
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