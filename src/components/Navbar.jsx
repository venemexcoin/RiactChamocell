import React from 'react'
import {Link} from 'react-router-dom'
import '../asset/navbar.css'
import Web from '../routes/Web'

const Navbar = () => {
    return (

    <div className="body">
            
        <header className="header">
                <div className="container">
                    <div className="btn-menu">
                    <label htmlFor="btn-menu">☰</label>
                </div>
                <div className="logo">
                    <h1 className="logo-title">ChamocellDev</h1>
                </div>
                <nav className="menu">
                <Link to={`/index`} className="link">
                    Home      
                </Link>
                <Link to={`/equipo`} className="link">
                    Equipo      
                </Link>
                <Link to={`/blog`} className="link">
                    Blog      
                </Link>
                <Link to={`/estadistica`} className="link">
                    Estadistica      
                </Link>    
                </nav>
                </div>
            </header>

           

            <div className="capa"></div>
            <Web />

        <input type="checkbox" id="btn-menu" />
        <div className="container-menu">
            <div className="cont-menu">
            <nav>
                <a href="#" className="lateral">Portafolio</a>
                <a href="#" className="lateral">Servicio</a>
                <a href="#" className="lateral">Suscribirse</a>
                <a href="#" className="lateral">Facebook</a>
                <a href="#" className="lateral">YouTube</a>
                <a href="https://www.instagram.com/mundochamocell" 
                className="lateral" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    Instagram
                </a>
            </nav>
            <label htmlFor="btn-menu">X</label>
            
        </div>
        
        </div>
    
        </div>
    )
}

export default Navbar
