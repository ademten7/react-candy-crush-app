import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const Levels = () => {
  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className="choose-level" onClick={handleShow}>
        Choose Your Level
      </button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>LEVELS</Modal.Title>
        </Modal.Header>
        <Modal.Body>Choose Your Level And Start</Modal.Body>
        <Modal.Footer>
          <button className="easy" onClick={handleClose}>
            EASY
          </button>
          <button className="hard" onClick={handleClose}>
            HARD
          </button>
          <button className="very-hard" onClick={handleClose}>
            VERY HARD
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Levels;
