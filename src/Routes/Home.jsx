import React, { useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_DENTISTS', payload: data }));
    }, [dispatch]);

  return (
    < >
      <h1>Home</h1>
        <div className='card-grid'>
          {state.dentists.map(dentist => (
            <Card 
            key={dentist.id} 
            name={dentist.name} 
            username={dentist.username} 
            id={dentist.id}  
            />
          ))}
        </div>
      
    </>
  )
}

export default Home