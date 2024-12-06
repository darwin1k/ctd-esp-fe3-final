import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setDentists(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error obteniendo dentistas:', err)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <h1>Home</h1>
      {loading ? (
        <p>Cargando dentistas...</p>
      ) : (
        <div className='card-grid'>
          {dentists.map(dentist => (
            <Card 
            key={dentist.id} 
            name={dentist.name} 
            username={dentist.username} 
            id={dentist.id}  
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Home