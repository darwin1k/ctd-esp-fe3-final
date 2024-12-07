import React, { useState, useEffect , useContext} from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme}>
      <h1>Dentistas Destacados</h1>
        <div className="card-grid">
          {state.favs.map(dentist => (
            <Card 
              key={dentist.id} 
              name={dentist.name} 
              username={dentist.username} 
              id={dentist.id}
              favorite={true}
            />
          ))}
        </div>
    </main>
  );
}

export default Favs
