import React from "react";

const Datamap = () => {
  const cous = [
    { id: 28, name: "Belgium", continent: "Europe" },
    { id: 29, name: "India", continent: "Asia" },
    { id: 30, name: "Bolivia", continent: "South America" },
    { id: 31, name: "Ghana", continent: "Africa" },
    { id: 32, name: "Japan", continent: "Asia" },
    { id: 33, name: "Canada", continent: "North America" },
    { id: 34, name: "New Zealand", continent: "Australasia" },
    { id: 35, name: "Italy", continent: "Europe" },
    { id: 36, name: "South Africa", continent: "Africa" },
    { id: 37, name: "China", continent: "Asia" },
    { id: 38, name: "Paraguay", continent: "South America" },
    { id: 39, name: "Usa", continent: "North America" },
    { id: 40, name: "France", continent: "Europe" },
    { id: 41, name: "Botswana", continent: "Africa" },
    { id: 42, name: "Spain", continent: "Europe" },
    { id: 43, name: "Senegal", continent: "Africa" },
    { id: 44, name: "Brazil", continent: "South America" },
    { id: 45, name: "Denmark", continent: "Europe" },
    { id: 46, name: "Mexico", continent: "South America" },
    { id: 47, name: "Australia", continent: "Australasia" },
    { id: 48, name: "Tanzania", continent: "Africa" },
    { id: 49, name: "Bangladesh", continent: "Asia" },
    { id: 50, name: "Portugal", continent: "Europe" },
  ];

  return (
    <div className=" grid grid-flow-row">
      {cous.map((post, index) => {
        return (
          <button
            onClick={() => console.log(post.id + post.name)}
            key={index}
            className=" border-2 "
          >
            {post.id}+{post.name}
          </button>
        );
      })}
    </div>
  );
};

export default Datamap;
