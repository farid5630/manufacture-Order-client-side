import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "f901f0d88405fd82f487bb8dcdb00bd6";

  const onSubmit = async (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
            const img = result.data.url;
            
          const part = {
            name: data.name,
            description: data.description,
            availabalQuantity: data.availabalQuantity,
            minimumOrder: data.minimumOrder,
            price:data.price,
            img: img,
          };
          console.log(part);
            
          // send to your database
          fetch("http://localhost:5000/parts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(part),
          })
            .then((res) => res.json())
              .then((inserted) => {
                if (inserted.insertedId) {                  
                toast.success("Parts added successfully");
                reset();
              } else {
                toast.error("Failed to add the Parts");
              }
            });
        }
      });
  };

  return (
    <div className="ml-10">
      <ToastContainer />
      <h2 className="text-2xl">Add a New Photocopy Machine parts</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>

          <textarea
            type="text"
            placeholder="Product Description"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "simple description",
              },
            })}
          ></textarea>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Stock Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("availabalQuantity", {
              required: {
                value: true,
                message: "stock quantity",
              },
            })}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum Order</span>
          </label>
          <input
            type="number"
            placeholder="Minimum Order"
            className="input input-bordered w-full max-w-xs"
            {...register("minimumOrder", {
              required: {
                value: true,
                message: "Minimum Order",
              },
            })}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Parts Per Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "simple description",
              },
            })}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("img", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddProduct;
