import React, { useState } from "react";
import { MyContext } from "./context";

const Container = (props) => {
  const [start, setStart] = useState(true);
  const [candy, setCandy] = useState(0);
  const [note, SetNote] = useState("");
  const [second, SetSecond] = useState(0);

  return (
    <MyContext.Provider
      value={{
        start,
        setStart,
        candy,
        setCandy,
        note,
        SetNote,
        second,
        SetSecond,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default Container;
