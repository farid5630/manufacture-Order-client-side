import React, { useState } from 'react';
import { useQuery } from "react-query";
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

    console.log(parts);

    if (isLoading) {
      return <Loading></Loading>;
    }

    return (
      <div>
        <h2>This is Manage Product </h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>SI</th>
                <th>email</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <th>{user.email}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageProduct;