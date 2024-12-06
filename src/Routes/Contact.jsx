import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const validateForm = () => {
    // Validación nombre (longitud > 5)
    const isNameValid = formData.fullName.length > 5
    
    // Validación email (formato básico)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isEmailValid = emailRegex.test(formData.email)

    return isNameValid && isEmailValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Datos enviados:', formData)
      setSuccess(true)
      setError(false)
      // Resetear formulario
      setFormData({ fullName: '', email: '' })
    } else {
      setError(true)
      setSuccess(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Limpiar mensajes al escribir
    setError(false)
    setSuccess(false)
  }

  return (
    <div>
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && (
        <p style={{color: 'red'}}>
          Por favor verifique su información nuevamente
        </p>
      )}
      
      {success && (
        <p style={{color: 'green'}}>
          Gracias {formData.fullName}, te contactaremos cuando antes vía mail
        </p>
      )}
    </div>
  )
}

export default Contact