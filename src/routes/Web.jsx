import React from 'react'
import {
    Switch,
    Route,
    Link,
  } from "react-router-dom"
import '../asset/web.css'  
import Civilizaciones from '../components/Civilizaciones'
import Contacto from '../components/Contacto'
import Inicio from '../components/Inicio'
import Nosotros from '../components/Nosotros'
import User from '../components/User'
import Blog from '../navbar/Blog'
import Equipo from '../navbar/Equipo'
import Estadistica from '../navbar/Estadistica'
import Index from '../navbar/Idex'

const Web = () => {
    return (
        <>
        
   
      <div className="container web-box ">
      <div className="btn-group mt-3">
        <Link to="/" className="btn btn-dark ml-2">
          Inicio
        </Link>
        <Link to="/contacto" className="btn btn-dark ml-2">
          Contacto
        </Link>
        <Link to="/nosotros" className="btn btn-dark ml-2">
          Nosotros
        </Link>
        <Link to="/Civilizaciones" className="btn btn-dark ml-2">
          Civilizaciones
        </Link>
      </div>
      <hr/>
      <Switch>
      <Route path="/civilizaciones/:id">
          <User />
        </Route>
        <Route path="/" exact>
          <Inicio />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path='/civilizaciones'>
          <Civilizaciones />
        </Route>
        <Route path='/index'>
          <Index />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/equipo'>
          <Equipo />
        </Route>
        <Route path='/estadistica'>
         <Estadistica />
        </Route>
       
      </Switch>
    </div>
    
    </>
    )
}

export default Web
