import React, { useEffect } from "react";

interface PropsButtonOK {
  // onClick?:(e:any)=>void
  ford?: string;
  dragon?: number;
  onClick?: any;
}

const tuy = () => {
  console.log("rrrr");
};

export function ButtonOKOne(props: PropsButtonOK) {
  return (
    <button className="border-red-400 border-2" onClick={props.onClick}>
      ButtonOKOne
    </button>
  );
}

export function ButtonOKTwo(props: PropsButtonOK) {
  return (
    <button className="border-red-400 border-2" onClick={props.onClick}>
      ButtonOKTwo
    </button>
  );
}
