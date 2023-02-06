import React, { useEffect,useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from "react"
import { cartContext } from "../Storage/cartContext"
import LoaderDetail from '../Loader/LoaderDetail'
import { Link } from 'react-router-dom'
const file='[ItemDetail.jsx]'

function ItemDetail(props) {
    console.log(`${file}`)
    const {title,price,imgurl,detail,category,handleAddToCart,isInCart,isLoading}=props
    const {cart,getTotalItemsInCart,addedToCart,setAddedToCart} = useContext(cartContext)
    console.log(`${file} | getTotalItemsInCart(): ${getTotalItemsInCart()}`)
    console.log(`${file} | addedToCart: ${addedToCart}`)

    useEffect(() => {
      console.log(`${file}[useEffect] | (before.setAddedToCart) addedToCart:${addedToCart} `)
    },[])
    //sm:px-32 sm:mx-32 md:px-32 md:mx-32 lg:px-48 lg:mx-48
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4  ">
        <div className="block overflow-hidden rounded-lg bg-white text-black">
          <br></br>
          {
           isLoading ?
            <div >
              {/* <h3>Cargando...</h3> */}
              <LoaderDetail/>
            </div>
           : 
                <div className='block overflow-hidden' >
                  
                    <div>
                      <img className="max-h-80 object-contain mx-auto" src={imgurl} alt={title}/>
                    </div>
                    <br></br>
                    {/* title.[producto] */}
                    <div>
                        <h2 className="mt-2 mb-2 | font-bold text-black |anim: 0" >
                          {title}</h2>
                        <p className="text-sm text-black |anim: 0 ">
                          {detail}</p>
                        <span className="inline-block | px-2 py-1 leading-none | rounded-full |  bg-orange-200 | text-orange-800 font-semibold uppercase tracking-wide text-xs |anim: 0 ">
                        {category}</span>
                    </div>
                    <div className="flex flex-row | space-x-1 py-4 m-4 | border-t border-b border-gray-200 | text-grey-500 ">
                      <div className='text-center m-auto'>
                        <span className=" inline-block  txt: font-bold text-2xl text-black">
                        $ {price}</span>
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
                <button className="m-4 py-2 px-8 rounded bg-teal-600 hover:bg-teal-800 text-white font-bold " >
                  Ir al carrito</button>
              </Link>              
              : 
                <ItemCount handleAddToCartCounting={handleAddToCart} />
        
          }
        </div>
      </div>
    )
  }
  
  export default ItemDetail
