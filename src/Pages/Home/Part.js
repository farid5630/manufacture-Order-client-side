import React from 'react';
import { useNavigate } from 'react-router-dom';


const Part = ({ part }) => {
    const { _id, name, img, description, price, availabalQuantity, minimumOrder } =
    part;
  const navigate = useNavigate()
  const navigateToOrders = id => {
    navigate(`/order/${id}`)
  }
    return (
      <div className="">
        <div className="mx-auto  shadow-xl mb-9">
          <div className="flex ">
            <div className="w-96 md:w-4/12">
              <img
                className="p-2 flex items-center"
                src={img}
                alt=""
                style={{}}
              />
            </div>
            <div className="w-96 md:w-8/12">
              <div className="card-body">
                <h3 className="card-title">
                  <strong>{name}</strong>
                </h3>
                <p className="card-text text-start">{description}</p>
                <div className="md:flex justify-between align-center">
                  <div className="text-start md:w-9/12">
                    <p className="text-muted mb-0">
                      Price: ৳ <strong>{price} per pcs</strong>
                    </p>

                    <p className="text-muted mb-0">
                      Available: {availabalQuantity} pcs
                    </p>
                    <p className="text-muted mb-0">
                      Minimum Order: {minimumOrder} pcs
                    </p>
                  </div>
                  <div className="md:w-3/12">
                    <button
                      onClick={() => navigateToOrders(_id)}
                      className="btn btn-success"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      //   <div className="card bg-base-100 shadow-xl">
      //     <figure className="px-10 pt-10">
      //       <img
      //         src={img}
      //         alt="fotocopyr parts"
      //         className="rounded-xl "
      //       style={{ height: "250px", objectFit: "cover" }}
      //       />
      //     </figure>
      //     <div className="card-body items-center text-center">
      //       <h2 className="card-title">{name}</h2>
      //       <p>{description}</p>
      //       <div className="card-actions">
      //         <button className="btn btn-primary">Buy Now</button>
      //       </div>
      //     </div>
      //   </div>
    );
};

export default Part;