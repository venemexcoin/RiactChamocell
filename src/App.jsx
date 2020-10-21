import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    </Router>
    </>
  );
}

export default App;
