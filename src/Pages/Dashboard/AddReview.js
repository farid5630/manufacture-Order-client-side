import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const imageStorageKey = "f901f0d88405fd82f487bb8dcdb00bd6";

    const onSubmit = (data) => {
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

                const review = {
                  name: data.name,
                  description: data.description,
                  rating:data.rating,
                  img: img,
                  };
                  console.log(review);

                // send to your database
                fetch("http://localhost:5000/review", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(review),
                })
                  .then((res) => res.json())
                  .then((inserted) => {
                    if (inserted.insertedId) {
                      toast.success("Parts added successfully");
                      reset();
                    } else {
                      toast.error("Failed to add the doctor");
                    }
                  });
              }
            });
      };
    return (
      <div className='flex flex-col items-center justify-center '>
        <h2 className='text-4xl text-green-500'>Please Your Review</h2>
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
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Your messege"
              className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Rating"
              className="input input-bordered w-full max-w-xs"
              {...register("rating", {
                required: {
                  value: true,
                  message: "Rating is Required",
                },
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Image</span>
            </label>
            <input
              type="file"
              {...register("img", {
                required: {
                  value: true,
                  message: "image is Required",
                },
              })}
            />
          </div>
          <input className="btn w-full max-w-xs text-white mt-5" type="submit"/>
        </form>
      </div>
    );
};

export default AddReview;