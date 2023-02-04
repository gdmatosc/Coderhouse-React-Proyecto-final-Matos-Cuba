
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
//import { getProducto } from '../services/mockService'
import { getProducto } from '../services/firebase'
import { cartContext } from '../Storage/cartContext'
import { useContext } from 'react'

function ItemDetailContainer() {
  // declaracion de parametros
  const [productos,setProductos]=useState([])
  const {addToCart,addedToCart,setAddedToCart,checkInCart}=useContext(cartContext)
  const [isInCart, setIsInCart] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  console.log("[ItemDetailContainer.jsx](inicio)(msg) isInCart: ",isInCart)
  console.log("[ItemDetailContainer.jsx](inicio)(msg) addedToCart: ",addedToCart)
  let params=useParams()  
  console.log(params)

  function handleAddToCartInContainer(count) {
    //setIsInCart(true)
    const productosCount={...productos,count: count}
    addToCart(productosCount)
  }
  

  useEffect(() => {
    
    //setAddedToCart(false)
    // lectura de datos de bd de [productos]
    getProducto(params.itemid)
    .then((respuesta)=>{
        setProductos(respuesta)
        console.log("[ItemDetailContainer.jsx][useEffect][getProducto.then] (msg) respuesta: ", respuesta)
        checkInCart(respuesta)
        setIsLoading(false)
    })
    .catch((error) => alert(error))
  },[])

  console.log(productos)

  

  return (
    <ItemDetail 
        // titulo-img-prop.de cada [producto]
        isLoading={isLoading}
        isInCart={isInCart}
        handleAddToCart={handleAddToCartInContainer}
        title={productos.title} 
        imgurl={productos.imgurl} 
        category={productos.category} 
        price={productos.price} 
         
    /> 
  )
}

export default ItemDetailContainer

// onAddToCart={handleAddToCart}