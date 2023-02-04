import React, { useEffect,useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from "react"
import { cartContext } from "../Storage/cartContext"
import LoaderDetail from '../Loader/LoaderDetail'
import { Link } from 'react-router-dom'

function ItemDetail(props) {
    // parametros
    console.log(props)
    const {title,price,imgurl,category,handleAddToCart,isInCart,isLoading}=props
    const {cart,getTotalItemsInCart,addedToCart,setAddedToCart} = useContext(cartContext)
    
    console.log("[ItemDetail.jsx](msg) getTotalItemsInCart: ",getTotalItemsInCart())
    //setAddedToCart(false)
    console.log("[ItemDetail.jsx](msg) addedToCart: ",addedToCart)
    //const [counterCart,setCounterCart]=useState(1)
    // const [countInCart,setCountInCart]=useState(0)
    // console.log("[itemDetail.jsx](msg) countInCart: ",countInCart)
    // function handleAgregarCarrito(count) {
    //   console.log(`se ha agregado ${count} items del producto ${title}`)
    //   setCountInCart(count)
    // }

    useEffect(() => {
      console.log("[ItemDetail.jsx][useEffect](msg) (before.setAddedToCart)addedToCart: ",addedToCart)
      //if(!addedToCart){
        //setIsLoading(false)
      //}
      //setAddedToCart(false)
    },[])

    return (
      <div className="md:mr-auto font-bold text-xl pt-4">
          <br></br>
          {/* img.[produto] */}
         
          {
           isLoading ?
            <div >
              {/* <h3>Cargando...</h3> */}
              <LoaderDetail/>
            </div>
           : 
                <div>
                  <div>
                    <div>
                      <img className="max-h-80 object-contain items-center px-80" src={imgurl} alt={title}/>
                    </div>
                    <br></br>
                    {/* title.[producto] */}
                    <div>
                        <h2>{title}</h2>
                    </div>

                    <div>
                      {/* precio.[producto] */}
                        <h3>$ {price}</h3>
                      {/* prop.[producto] */}
                        <small>{category}</small>
                    </div>

                    {/* ejecución de compra de la cantidad de productos */}

                    <div>
                    <br></br>
                    </div>
                    {/* control.by.usuario.cantidad de [productos] a [*comprar*] */}
                  </div>
                  
                </div>
          }   

          {
           isLoading ?
             <div >
               {/* <h3>Cargando counter...</h3> */}
               <LoaderDetail/>
             </div>
           : 
            addedToCart ?
            <Link to="/cart">
              <button className="py-2 px-4 rounded bg-teal-500 hover:bg-teal-800 text-white font-bold " >
                Ir al carrito</button>
            </Link>
            //  <button className="py-2 px-4 rounded bg-teal-500 hover:bg-teal-800 text-white font-bold " ></button>
              
            : 
              <ItemCount handleAddToCartCounting={handleAddToCart} />
        
          }

      </div>
    )
  }
  
  export default ItemDetail

  // control.by.usuario.cantidad de [productos]
  //handleAgregarCarrito={handleAgregarCarrito}

   {/* validacion de datos del producto */}
         {/* <button id="button" className="py-2 px-4 rounded bg-teal-500 hover:bg-teal-800 text-white font-bold " >
             Click me
         </button> */}

  //btn1.addEventListener('click', e=> console.log('click!') );
      //console.log("btn: ",btn)
      //console.log(btn1.getEventListeners('click'))
      // btn1.getEventListeners(),

    // useEffect(() => {

    //   let btn1=document.getElementById('button')
    //   btn1.addEventListener("click",handleClick)
    //   btn1.addEventListener("mouseover",saludos)
    //   let timer=setInterval(
    //     ()=>console.log("Escuchando...ItemDetail.",
        
    //     document.getElementById('button')),
    //     1500)

    //   return ()=>{
    //     console.log("desmontado")
    //     btn1.removeEventListener("click", handleClick);
    //     clearInterval(timer)
    //     }
    // }, [])

    // counter={counter} 
    //         increase={increase}
    //         decrease={decrease}

        // function handleClick() {
    //     console.log("click")
    // }

    // function saludos() {
    //     console.log("hola")
    // }    

    // function agregarCarrito() {
    //   console.log(`se ha agregado ${counterCart} items del producto ${title}`);
    // }