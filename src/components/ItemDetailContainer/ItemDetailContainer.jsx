
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProducto } from '../services/firebase'
import { cartContext } from '../Storage/cartContext'
import { useContext } from 'react'
const file='[ItemDetailContainer.jsx]'

function ItemDetailContainer() {
  console.log(`${file}`)
  const [productos,setProductos]=useState([])
  const {addToCart,addedToCart,setAddedToCart,checkInCart}=useContext(cartContext)
  const [isInCart, setIsInCart] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  console.log(`${file} | (inicio) isInCart: ${isInCart}`)
  console.log(`${file} | (inicio) addedToCart: ${addedToCart}`)
  let params=useParams()  
  console.log(`${file} | params: ${JSON.stringify(params)}`)
  console.log(`${file} | params.itemid: ${params.itemid}`)

  function handleAddToCartInContainer(count) {
    const productosCount={...productos,count: count}
    addToCart(productosCount)
  }

  useEffect(() => {
    // lectura de datos de bd de [productos]
    getProducto(params.itemid)
    .then((respuesta)=>{
        setProductos(respuesta)
        console.log(`${file}[useEffect][fn: getProducto][.then] | respuesta: ${respuesta}`)
        checkInCart(respuesta)
        setIsLoading(false)
    })
    .catch((error) => alert(error))
  },[])

  console.log(`${file} (after.useEffect) productos: ${productos}`)
  //items-center
  return (
    <div className="seccion1 flex justify-center -mx-4 font-bold text-2xl">

    <ItemDetail 
        isLoading={isLoading}
        isInCart={isInCart}
        handleAddToCart={handleAddToCartInContainer}
        title={productos.title} 
        imgurl={productos.imgurl} 
        detail={productos.detail} 
        category={productos.category} 
        price={productos.price} 
        /> 
    </div>
  )
}

export default ItemDetailContainer
