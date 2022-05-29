import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const ManageProduct = () => {
  const [deletingParts, setDeletingParts] = useState(null);
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch("http://localhost:5000/parts", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
     fetch(`http://localhost:5000/parts/${id}`, {
       method: "DELETE",
       headers: {
         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
       },
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if (data.deletedCount) {
           toast.success(`Parts delete successfully.`);
           setDeletingParts(null);
           refetch();
         }
       });
  }
  return (
    <div>
      <h2>This is Manage Product </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Image</th>
              <th>Stock</th>
              <th>Min Order</th>
              <th>Description</th>
              <th>Per Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, index) => (
              <tr key={part._id}>
                <td>{index + 1}</td>
                <td>{part.name.slice(0, 12)}...</td>
                <td>
                  <img
                    src={part.img}
                    style={{ width: "70px", height: "32px" }}
                    alt=""
                  />
                </td>
                <td>{part.availabalQuantity}</td>
                <td>{part.minimumOrder}</td>
                <td>{part.description.slice(0, 12)}..</td>
                <td>{part.price}</td>
                <td>
                  <label
                    onClick={() => setDeletingParts(part)}
                    htmlFor="delete-confirm-modal"
                  >
                    <i className="fa fa-trash text-2xl text-red-500 "></i>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingParts && (
        <>
          <input
            type="checkbox"
            id="delete-confirm-modal"
            className="modal-toggle"
          />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-center text-lg text-red-500">
                Are You sure Delete Product
              </h3>
              <h2 className="font-bold text-lg text-center">{deletingParts.name}</h2>
              <p className="py-4">{deletingParts.description}</p>
              <div className="modal-action">
                <button
                  onClick={() => handleDelete(deletingParts._id)}
                  className="btn btn-xs btn-error"
                >
                  Delete
                </button>
                <label for="delete-confirm-modal" className="btn-xs">
                  Cancel
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageProduct;
