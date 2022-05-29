import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const MakeAdmin = () => { 
    
    const {
      data: users,
      isLoading,
      refetch,
    } = useQuery("users", () =>
      fetch("http://localhost:5000/user", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );
    if (isLoading) {
      return <Loading></Loading>;
    }
    
    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => {
            if (res.status === 403) {
              toast.error("Failed to Make an admin");
            }
            return res.json();
          })
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              toast.success(`Successfully made an admin`);
            }
          });
  }


  return (
    <div>

      <h1 className="uppercase text-gray-500 text-3xl text-center after-custom mb-4">
        New admin Create
      </h1>
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
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <th>{user.email}</th>
                <td>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => makeAdmin(user.email)}
                      className="btn btn-xs"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
