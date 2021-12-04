import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./pro.scss";
import Singleprod from "./Singleprod";
function Products() {
  const { key } = useSelector((state) => state.KEYREDUCER);

  const data = [
    {
      id: 1,
      name: "akibrot",
    },
    {
      id: 2,
      name: "samuel",
    },
    {
      id: 3,
      name: "daka",
    },
    {
      id: 4,
      name: "fraol",
    },
    {
      id: 5,
      name: "kassu",
    },
    {
      id: 6,
      name: "kebede",
    },
    {
      id: 7,
      name: "coffee",
    },
    {
      id: 8,
      name: "gadisa",
    },

    {
      id: 9,
      name: "shumi",
    },
    {
      id: 10,
      name: "firu",
    },
  ];
  const [dataa, setdata] = useState(data);

  useEffect(() => {
    if (key === "") {
      setdata(data);
    } else setdata(data.filter((da) => da.name === key));
  }, [key]);
  return (
    <div className="all" onClick={console.log(key)}>
      {dataa.map((files) => {
        return <Singleprod key={files.id} data={files}></Singleprod>;
      })}
    </div>
  );
}

export default Products;
