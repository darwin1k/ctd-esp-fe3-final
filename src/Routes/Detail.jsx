import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState({});
  const {id} = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setDentist(data);
      })
  }, [id]);

  return (
    <div className={state.theme}>
      <h1>Detalle del Dentista</h1>
      {dentist && (
        <table className={`table ${state.theme}`}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Sitio web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Detail