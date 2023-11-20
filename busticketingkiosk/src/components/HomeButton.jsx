import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsHouseDoorFill } from 'react-icons/bs';
import '../styles/HomeButton.css'; 

const HomeButton = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleConfirmClose = () => setShowConfirm(false);
  const handleConfirmShow = () => setShowConfirm(true);
  const handleConfirmNavigate = () => {
    navigate('/'); 
    handleConfirmClose();
  };

   if (location.pathname === '/') {
        return null; 
   }
  return (
    <>
      <Button className="custom-home-button" onClick={handleConfirmShow}>
        <BsHouseDoorFill />
      </Button>

      <Modal show={showConfirm} onHide={handleConfirmClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to go back to the bus ticketing kiosk homepage?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleConfirmClose}>
            Cancel
          </Button>
          <Button className="custom-confirm-button" onClick={handleConfirmNavigate}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomeButton;
