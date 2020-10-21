import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Civilizaciones = () => {

    const [equipo, setEquipo] = useState([]);

    useEffect(() => {
        obtenerDatos()
    }, []);
    
    const obtenerDatos = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()
        console.log(users)
        setEquipo(users.civilizations)
    }

    return (
        <div>
          <ul>
              {
                  equipo.map(item => (
                  <li key={item.id}>
                      <Link to={`/civilizaciones/${item.id}`}>
                      {item.name} - {item.expansion}
                      </Link>
                      </li>
                  ))
              }
          </ul>
        
      </div>
    )
}

export default Civilizaciones
