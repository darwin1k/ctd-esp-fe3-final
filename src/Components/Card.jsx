import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Card = ({ name, username, id, updateFavs }) => {
  const [favorite, setFavorite] = useState(false)

  // Verificar estado inicial de favorito
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs') || '[]')
    setFavorite(favs.some(fav => fav.id === id))
  }, [id])

  const toggleFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs') || '[]')
    
    if (favorite) {
      // Remover de favoritos
      const updatedFavs = favs.filter(fav => fav.id !== id)
      localStorage.setItem('favs', JSON.stringify(updatedFavs))
    } else {
      // Agregar a favoritos
      const newFav = { id, name, username }
      localStorage.setItem('favs', JSON.stringify([...favs, newFav]))
    }

    // Actualizar estado local inmediatamente
    setFavorite(!favorite)
    
    // Si existe la función updateFavs (en la página de favoritos), la llamamos
    if (updateFavs) updateFavs()
  }

  return (
    <div className="card-grid">
      <Link to={`/detail/${id}`}>
        <img src={`/images/doctor.jpg`} alt={name} className="card-image" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      
      <button 
        onClick={toggleFav} 
        className={`favButton ${favorite ? 'active' : ''}`}
      >
        {favorite ? '❤️ Remove fav' : '🤍 Add fav'}
      </button>
    </div>
  )
}

export default Card
