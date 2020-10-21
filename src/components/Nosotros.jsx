import React, {useEffect, useState} from 'react'

const Nosotros = () => {

    

    const [equipo, setEquipo] = useState([]);


    useEffect(() => {

        document.title = 'chamocell'  
        obtenerDatos()
       
        
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        console.log(users)
        setEquipo(users)
    }


    return (
        <div>
          <ul>
              {
                  equipo.map(item => (
                  <li key={item.id}>{item.name} - {item.email}</li>
                  ))
              }
          </ul>
        
      </div>
        
    )
}

export default Nosotros
