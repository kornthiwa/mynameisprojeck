import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const bassURL = "https://jsonplaceholder.typicode.com/users";
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(bassURL)
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);

  console.log("Hi" + "ool", data);

  return (
    <div className=" border-2 bg-slate-300">
      {data.map((e: any, index) => {
        return (
          <div key={index}>
            <h2>{e.id}</h2>
            <h1>{e.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
