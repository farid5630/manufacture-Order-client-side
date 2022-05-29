import React from "react";

const business = [
  {
    id: 1,
    name: "Countries",
    number: 32,
    img: "https://i.ibb.co/6RBTrk9/image.png",
  },
  {
    id: 2,
    name: "Complete Project",
    number: "540+",
    img: "https://i.ibb.co/MnTcQdh/image.png",
  },

  {
    id: 3,
    name: "Happy Calients",
    number: "380+",
    img: "https://i.ibb.co/cJKdYZx/image.png",
  },
  {
    id: 4,
    name: "Feedbacks",
    number: "420+",
    img: "https://i.ibb.co/9wbZz6p/image.png",
  },
];

const BusinessSummary = () => {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <h3 className="mt-10 text-4xl text-center uppercase font-bold text-cyan-500">
        Millions Business Trust Us
      </h3>
      <p className="after-custom text-2xl text-center uppercase mb-8">
        Try to understand users expectation
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {business.map((busines) => (
          <div key={busines.id} className="flex flex-col items-center">
            
            <img
              className="mb-5"
              src={busines.img}
              alt="logo"
              style={{ width: "150px", height: "150px" }}
            />
            <h2 className="text-4xl font-bold">{busines.number}</h2>
            <h2 className="text-cyan-500 text-xl font-bold">{busines.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSummary;
