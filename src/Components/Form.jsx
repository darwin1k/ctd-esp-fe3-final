import React, { useState, useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Form = () => {

  const { state } = useContext(ContextGlobal);
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar mensajes al escribir
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    if (formData.fullName.length < 5) {
      setError('El nombre debe tener al menos 5 caracteres');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingrese un email válido');
      return;
    }

    // Si pasa las validaciones
    setSuccess('¡Gracias por contactarnos! Nos comunicaremos pronto');
    setFormData({ fullName: '', email: '' }); // Limpiar formulario
  };

  return (
    
        <form onSubmit={handleSubmit} className={`contact-form ${state.theme}`}>
          <div className="form-group">
            <label className='form-label'>Nombre completo:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className='form-label'>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">Enviar</button>
          {error && <div className="form-error">{error}</div>}
          {success && <div className="form-sucess">{success}</div>}
        </form>
      
  );
};

export default Form;