import React from 'react';
import Appointment from './AppointmentForm';
import Maps from './Maps';

const MultiComponentHandler = () => {
  return (
    <div>
      <Maps />
      <Appointment />
    </div>
  );
};

export default MultiComponentHandler;