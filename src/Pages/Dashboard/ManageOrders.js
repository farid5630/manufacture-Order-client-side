import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/orders", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  
  return (
    <div>
      <h3 className="text-3xl text-gray-500 text-center after-custom mb-4">
        All Order Managment System
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Image</th>
              <th>E-mail</th>
              <th>Order</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.name.slice(0, 18)}...</td>
                <td>
                  <img
                    src={order.img}
                    style={{ width: "150px", height: "35px" }}
                    alt=""
                  />
                </td>
                <td>{order.email}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                {/* <td>{order.status}</td> */}
                <td>{ order.status !=='unpaid' ? 'pending' : 'Unpaid'}</td>
                <td className="text-warning">{ order.status ==='unpaid' ? '' : 'Shift'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
