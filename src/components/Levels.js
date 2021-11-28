import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { MyContext } from "../Context/context";

const Levels = () => {
  //Modal
  const { setStart, setCandy, SetNote, SetSecond } = useContext(MyContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Easy
  const easy = () => {
    setStart(false);
    setShow(false);
    SetSecond(300);
    setCandy(100);
    SetNote(`Try to get 100 🍭 in 5 minutes`);
  };

  //Hard
  const hard = () => {
    setStart(false);
    setShow(false);
    SetSecond(210);
    setCandy(150);
    SetNote(`Try to get 150 🍭 in 3:30 minutes`);
  };

  //Very Hard
  const veryHard = () => {
    setStart(false);
    setShow(false);
    SetSecond(150);
    setCandy(200);
    SetNote(`Try to get 200 🍭 in 2:50 minutes`);
  };

  return (
    <div>
      <button className="choose-level" onClick={handleShow}>
        Enter Name-Choose Level
      </button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>LEVELS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Enter Your Name and Choose a Level
          <input type="text" placeholder="Enter your name here" />
        </Modal.Body>
        <Modal.Footer>
          <button className="easy" onClick={easy}>
            EASY
          </button>
          <button className="hard" onClick={hard}>
            HARD
          </button>
          <button className="very-hard" onClick={veryHard}>
            VERY HARD
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Levels;
