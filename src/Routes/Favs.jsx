import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'

const Favs = () => {
  const [favDentists, setFavDentists] = useState([])

  useEffect(() => {
    // Obtener favoritos del localStorage
    const getFavs = () => {
      const localFavs = localStorage.getItem('favs')
      return localFavs ? JSON.parse(localFavs) : []
    }
    setFavDentists(getFavs())
  }, [])

  return (
    <div>
      <h1>Dentistas Destacados</h1>
      {favDentists.length === 0 ? (
        <p>No hay dentistas destacados</p>
      ) : (
        <div className="card-grid">
          {favDentists.map(dentist => (
            <Card 
              key={dentist.id} 
              name={dentist.name} 
              username={dentist.username} 
              id={dentist.id}
              updateFavs={() => {
                // Actualizar estado cuando se elimine un favorito
                setFavDentists(JSON.parse(localStorage.getItem('favs') || '[]'))
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favs
