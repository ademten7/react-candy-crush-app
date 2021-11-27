import React, { useState } from "react";
import { MyContext } from "./context";

const Container = (props) => {
  const [timer, setTimer] = useState(true);
  const [candy, setCandy] = useState(200);
  const [note, SetNote] = useState("");

  return (
    <MyContext.Provider
      value={{ timer, setTimer, candy, setCandy, note, SetNote }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default Container;
