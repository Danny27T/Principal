import React from 'react';
import Appointment from './AppointmentForm';
import Pricing from './Pricing';

const MultiComponentHandler = () => {
  return (
    <div>
      <Pricing />
      <Appointment />
    </div>
  );
};

export default MultiComponentHandler;