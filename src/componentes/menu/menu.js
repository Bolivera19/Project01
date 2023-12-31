import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">

      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/listado">
          Listado de Cursos <span className="Sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item>">
        <NavLink className="nav-link" to="/catalogo">
          Catalogo de Cursos
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/videos">
            Galeria de Videos
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contador">
          Contador - Reducer
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/carritocompras">
            Carrito Compras
            </NavLink>
          </li>
           </ul>
        </div>
        </nav>
        );
      }
    }
