import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch("https://fast-temple-50632.herokuapp.com/review", {}).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-7xl mx-auto px-12">
      <h4 className="after-custom text-center mt-16 uppercase text-4xl text-cyan-500">
        testimonials
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {reviews?.slice(0, 4).map((review) => (
          <div key={review._id} className="card card-side bg-gray-200 shadow-xl">
            <figure>
              <img className="pl-3" src={review.img} alt="Client Imag" style={{ width:'140px', height:'150px', borderRadius:'50%' }} />
            </figure>
            <div className="card-body">
              <p>{review.description}</p>
              <p className="text-2xl text-yellow-500 font-bold">
                {review.rating}
              </p>
              <h2 className="card-title text-cyan-500">{review.name}</h2>

              
            </div>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Reviews;
