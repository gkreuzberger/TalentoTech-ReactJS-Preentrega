import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Contacto from './components/Contact';
import ProductsContainer from './components/ProductsContainer';
import ProductDetail from './components/ProductDetail'
import Carrito from './components/Carrito';
import Login from './components/Login';

function App() {
  const [usuarioLogeado, setUsuarioLogeado] = useState(false)
  const [adminLogeado, setAdminLogeado] = useState(false)

  function manejarAdmin() {
    setAdminLogeado(!adminLogeado)
  }

  function manejarUser(){
    setUsuarioLogeado(!usuarioLogeado)
  }

  
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductsContainer/>} />
          <Route path="/productos/:id" element={<ProductDetail/>} />
          <Route path="/carrito" element={<Carrito usuarioLogeado={usuarioLogeado} /> }/>
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path='/login' element={<Login user={usuarioLogeado} admin={adminLogeado} setLogeadoAdmin={manejarAdmin} setLogeadoUser={manejarUser}/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App

/*
<Route path='/login' element={<Login user={usuarioLogeado} admin={adminLogeado} setLogeadoAdmin={manejarAdmin} setLogeadoUser={manejarUser}/>}/>
<Route path="/productos" element={<ProductosContainer/>} />
<Route path="/carrito" element={<Carrito usuarioLogeado={usuarioLogeado} /> }/>      
<Route path="/nosotros" element={<About />} />
<Route path="/contacto" element={<Contacto/>} />
<Route path="/productos/:id" element={<ProductoDetalle/>} />
<Route path='/admin' element={adminLogeado ? <Admin/> : <Navigate to={"/login"} replace/>} />
*/
