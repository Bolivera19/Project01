import { BrowserRouter, Route, Routes} from "react-router-dom";
import React, { Component } from "react";
import Listado from "./listado/listado";
import Menu from "./menu/menu";
import Catalogo from "./catalogo/catalogo";
import Videos from "./videos/videos";
import Contador from "./contador/contador";
import CarritoCompras from "./carritocompras/carritocompras";

export default class Router extends Component {
    render() { 
        return (
            <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/listado" element={<Listado/>} />
                <Route path="/catalogo" element={<Catalogo/>} />
                <Route path="/videos" element={<Videos/>} />
                <Route path="/contador" element={<Contador/>} />
                <Route path="/carritocompras" element={<CarritoCompras/>} />
            </Routes>
            </BrowserRouter>
        );
    }
}