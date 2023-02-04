/* #region 0.librerias */
/* #region plantilla */
//ly: 0 |bxsz: 0 |br: 0 |bgr: 0 |txt: 0 |anim: 0 
/* #endregion */
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Formulario from './components/pages/Registro'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider} from './components/Storage/userContext'
import { CartProvider } from './components/Storage/cartContext'
import app, {obtenerProductos} from './components/services/firebase'
import CartContainer from './components/CartContainer/CartContainer'
import Registro from './components/pages/Registro'
import PageNotFound from './components/pages/PageNotFound'
const file='[App.jsx]'
/* #endregion */

function App() {
  /* #region 1.parametros y funciones */
  console.log(`${file}`)
  obtenerProductos() //lectura de datos de Firebase

  /* #endregion */
  
  return (

    <div className="body">
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" 
              element={<ItemListContainer/>}/>

              <Route path="/detalle/:itemid" 
              element={<ItemDetailContainer/>}/>

              <Route path="/category/:categoryid" 
              element={<ItemListContainer/>}/>

              <Route path="/registro" 
              element={<Registro />}/>

              <Route path="/cart" 
              element={<CartContainer/>}/>

              <Route path="/thank-you/:orderid"
              element={<div><br/><h2>Gracias por su compra!</h2></div>} />

              <Route path="*" 
              element={<PageNotFound/>}/>
              
            </Routes>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

