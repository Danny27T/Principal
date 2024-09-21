import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_6mfpgvc', // Replace with your service ID
        'template_6e63d93', // Replace with your template ID
        formData,
        'gqzRfEA97rYhEwu_2' // Replace with your user ID
      )
      .then(
        (response) => {
          alert('Cita enviada con éxito!');
        },
        (error) => {
          alert('Hubo un error al enviar la cita: ', error.text);
        }
      );

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      appointmentDate: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:max-w-xl mx-auto p-6 sm:p-10 mt-20 mb-10 bg-orange-600 shadow-lg rounded-md">
      <h2 className="text-2xl sm:text-3xl text-center font-semibold mt-4 mb-8">Agendar Cita</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
          Nombre Completo:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 mb-3 p-3 w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
          Correo Electrónico:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 mb-3 p-3 w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
          Teléfono:
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 mb-3 p-3 w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="appointmentDate" className="block text-lg font-medium text-gray-700">
          Fecha de la Cita:
        </label>
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          className="mt-1 mb-3 p-3 w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-lg font-medium text-gray-700">
          Especifíca y detalla tu solicitud:
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 mb-9 p-3 w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-80 md:w-96 h-16 mb-5 bg-sky-900 text-white text-xl font-semibold py-2 px-4 rounded-md transition duration-300 border-4 border-black shadow-sm block mx-auto"
      >
        Enviar Solicitud
      </button>
    </form>
  );
};

export default AppointmentForm;