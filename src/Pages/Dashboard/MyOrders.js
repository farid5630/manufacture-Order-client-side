import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setMyOrders(data);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    const confirm = window.confirm("are you sure ");
    if (confirm) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "DELETE",
      }).then((data) => {
        console.log(data);
        toast("Delete Successfully");
        const remaining = myOrders.filter((myOrder) => myOrder._id !== id);
        setMyOrders(remaining);
      });
    }
  };

  return (
    <div>
      <h1>My all Orders</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Image</th>
              <th>Order Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder, index) => (
              <tr key={myOrder._id}>
                <td>{index + 1}</td>
                <th>{myOrder.name}</th>
                <td>
                  <img
                    src={myOrder.img}
                    style={{ width: "100px", height: "35px" }}
                    alt="tools imag"
                  />
                </td>
                <td>{myOrder.quantity} PCS</td>
                <td>{myOrder.price}</td>
                <td>
                  <i
                    className="fa fa-trash text-red-500 text-center text-2xl"
                    onClick={() => handleDelete(myOrder._id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
