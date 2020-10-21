import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    
    //console.log(useParams())
    const {id} = useParams()
    console.log(id)

    const [pueblo, setPueblo] = useState([]);
    const [bonus, setBonus] = useState([]);

    useEffect(() => {

        const obtenerDatos = async () => {

            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const users = await data.json()
            setPueblo(users)
            setBonus(users.civilization_bonus)
        }

        obtenerDatos()
        
    }, [id]);

   



    return (

        <div>
            <h3>{pueblo.name}</h3>
            <h4>{pueblo.expansion}</h4>
            <h4>{pueblo.army_type}</h4>
            <ul>
                {
                    bonus.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default User
