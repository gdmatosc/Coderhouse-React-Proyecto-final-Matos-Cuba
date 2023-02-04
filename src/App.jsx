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
/* #endregion */

function App() {
  /* #region 1.parametros y funciones */
  // const [count, setCount] = useState(0)
  // function logOutSession() {
  //   console.log('logout');
  // }

  // function logInSession(username) {
  //   alert(`Bienvenido el usuario: ${username}`)
  // }
  obtenerProductos()

  function registro() {
    console.log('usuario registrándose')
  }

  function bienvenida(username) {
    alert(`Bienvenido: ${username}`)
  }
  /* #endregion */
  
  return (

    <div className="body">
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <NavBar registro={registro}  />
            <Routes>
              <Route path="/" 
              element={<ItemListContainer/>}/>

              <Route path="/detalle/:itemid" 
              element={<ItemDetailContainer/>}/>

              <Route path="/category/:categoryid" 
              element={<ItemListContainer/>}/>

              <Route path="/formulario" 
              element={<Registro bienvenida={bienvenida} />}/>

              <Route path="/cart" 
              element={<CartContainer/>}/>

              <Route path="/thank-you/:orderid"
              element={<div><br/><h2>Gracias por su compra!</h2></div>} />

              {/* <Route path="*" 
              element={<div><br/><h2>Página no encontrada</h2></div>}/> */}

              <Route path="*" 
              element={<PageNotFound/>}/>
              {/* element={<PageNotFound/>} */}
            </Routes>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

/* #region comentarios */

{/* <ItemListContainer text="Bienvenidos!!"/> */}
      
{/* <ItemDetailContainer /> */} 
// 1.box1 - u.r, u.a, f-f
// {/* 1.1.item1 - u.r, u.a, f-f, t.cnt, cnt */}
// {/* 1.2.box1.2 - u.r, u.a, f-f, t.cnt, cnt */}
// {/* 1.2.1.item2 - u.r, u.a, f-f, t.cnt, cnt */}
// {/* 1.2.2.item3 - u.r, u.a, f-f, t.cnt, cnt */}
// {/* 1.2.item4 - u.r, u.a, f-f, t.cnt, cnt */}

/* #endregion */

/* #region desactualizado */

//import reactLogo from '/react.svg'
//import './App.css'
//u.r, u.a, f-f, t.cnt, cnt
    // <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>

    // <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count} </button>

    // <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR </p>

    // <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more </p>


/* #endregion */
