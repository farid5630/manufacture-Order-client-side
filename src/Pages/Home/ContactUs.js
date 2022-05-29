import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {
    console.log('contact messege')
  }
    return (
      <div className="my-10 max-w-7xl mx-auto px-12">
        <h3 className="uppercase  text-center text-cyan-500 font-bold text-3xl">
          contact Us
        </h3>
        <p className="text-center after-custom">
          This question can be answered simply: no contact lenses should not
          hurt
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="text">
                <h3 className="text-xl text-gray-500">Address</h3>
                <p className="text-gray-500">
                  5630 Tabakpur, <br /> Ulipur, Kurigram
                </p>
              </div>
            </div>

            <div className="box  my-5">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="text">
                <h3 className="text-xl text-gray-500">Phone</h3>
                <p>01762-880051</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="text">
                <h3 className="text-xl text-gray-500">Email</h3>
                <p>mdforidulislam5630@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
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
                  <span className="label-text">E-mail</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Rating is Required",
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

              <input
                className="btn w-full max-w-xs text-white mt-5"
                type="submit"
                value="send"
              />
            </form>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;