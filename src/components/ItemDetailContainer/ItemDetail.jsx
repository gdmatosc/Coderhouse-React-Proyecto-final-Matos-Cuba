import React, { useEffect,useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from "react"
import { cartContext } from "../Storage/cartContext"
import LoaderDetail from '../Loader/LoaderDetail'
import { Link } from 'react-router-dom'
const file='[ItemDetail.jsx]'

function ItemDetail(props) {
    console.log(`${file}`)
    const {title,price,imgurl,category,handleAddToCart,isInCart,isLoading}=props
    const {cart,getTotalItemsInCart,addedToCart,setAddedToCart} = useContext(cartContext)
    console.log(`${file} | getTotalItemsInCart(): ${getTotalItemsInCart()}`)
    console.log(`${file} | addedToCart: ${addedToCart}`)

    useEffect(() => {
      console.log(`${file}[useEffect] | (before.setAddedToCart) addedToCart:${addedToCart} `)
    },[])

    return (
      <div className="md:mr-auto font-bold text-xl pt-4">
          <br></br>
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
                    <div>
                    <br></br>
                    </div>
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
                {/* Acceso al carrito */}
                <button className="py-2 px-4 rounded bg-teal-500 hover:bg-teal-800 text-white font-bold " >
                  Ir al carrito</button>
              </Link>              
              : 
                <ItemCount handleAddToCartCounting={handleAddToCart} />
        
          }

      </div>
    )
  }
  
  export default ItemDetail
