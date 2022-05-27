import React, { useEffect, useState } from "react";
import Part from "./Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-12">
      <h3 className="text-cyan-500 text-4xl font-bold text-center after-custom my-8 ">Photocopy Machine Parts Price in Bangladesh</h3>
      <div className="">
        {parts.slice(0,6).map((part) => (
          <Part key={part.id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
