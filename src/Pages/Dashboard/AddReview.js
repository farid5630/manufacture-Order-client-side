import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
      const { register, handleSubmit } = useForm();
      const onSubmit = (data) => console.log(data);
    return (
      <div>
        <h2>This is add review</h2>
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
          <input
            className="input input-bordered w-full max-w-xs"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <input type="number" {...register("age", { min: 18, max: 99 })} />
          <input type="submit" />
        </form>
      </div>
    );
};

export default AddReview;