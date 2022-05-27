import React, { useEffect, useState } from "react";
import Part from "./Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-12">
      <h3 className="text-success text-3xl font-bold text-center mt-8 ">Photocopy Machine Parts Price in Bangladesh</h3>
      <div className="">
        {parts.slice(0,6).map((part) => (
          <Part key={part.id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
