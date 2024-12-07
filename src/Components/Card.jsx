import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context"
import { useContext } from "react"

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const isFavorite = state.favs.some(fav => fav.id === id);

  const toggleFav = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAV', payload: { id } });
    } else {
      const fav = { name, username, id };
      dispatch({ type: 'ADD_FAV', payload: fav });
      alert(`${name} se agregó a favoritos`);
    }
  };

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img src={`/images/doctor.jpg`} alt={name} className="card-img" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={toggleFav} className={`favButton ${isFavorite ? 'active' : ''}`}>
        {isFavorite ? '❤️ Remove fav' : '🤍 Add fav'}
      </button>
    </div>
  )
}

export default Card
