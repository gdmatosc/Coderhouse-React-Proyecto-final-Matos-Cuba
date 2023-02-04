import React from 'react'
import { createContext,useState,useEffect } from 'react'
import { useDeepCopy } from '../../hooks/useDeepCopy'

export const cartContext=createContext({cart:[]})
const file='[cartContext.js]'

function CartProvider(props) {
  const [cart, setCart] = useState([])
  const [addedToCart, setAddedToCart] = useState(false)
  const monitor= () => console.log("[cartContext.jsx](msg) monitoring");
  let newCart=useDeepCopy(cart)
  console.log("[cartContext.jsx](msg) addedToCart: ",addedToCart)
 useEffect(() => {
    
    console.log("[cartContext.jsx][useEffect](msg) cambios en cart");
   
 }, [cart])
 
  function checkInCart(item){
    console.log("[cartContext.jsx][chechInCart](msg) inicio.de.funcion");
    //array: [e0|e1|e2|e3|...|en-1] lenght:n, id, map-filter-findindex-reduce
    //            <-☝->
    let isInCart=cart.findIndex((itemInCart) => itemInCart.id===item.id)
    
    console.log("[cartContext.jsx][addToCart](msg) addedToCart: ",addedToCart)
    if (isInCart !== -1) {
        setAddedToCart(true)
      
    } else {
        setAddedToCart(false)
    }
  }

  function addToCart(item) {
    console.log(`${file}[addToCart] | inicio.de.funcion`)
    let isInCart=cart.findIndex((itemInCart) => itemInCart.id===item.id)
    //let newCart=cart.map((item) => item)
    
    
    console.log("[cartContext.jsx][addToCart](msg) addedToCart: ",addedToCart)
    if (isInCart !== -1) {
        setAddedToCart(true)
        alert("Cuidado producto ya agregado!")
    } else {
        setAddedToCart(false)
        newCart.push(item)
        setCart(newCart)
        console.log(`${file}[fn: addToCart][else] | cart: ${cart}`)
        console.log(`${file}[fn: addToCart][else] | newCart: ${newCart}`)
        setAddedToCart(true)
    }
  }

  function removeItem(itemid) {
      console.log(`${file}[fn: removeItem]`)
      return "ok"
    //splice+findindex
  }

  function getTotalItemsInCart() {
      //reduce
    let j=0; let ivalue=0
    console.log(`${file}[fn: getTotalItemsInCart] | string.cart: ${JSON.stringify(cart)}`);
    const sum=cart.reduce((total,cvalue) => { 
        j=j+1
        console.log('[cartContext.js][fn: getTotalItemsInCart] | ',
            '[title: ',cvalue.title,',cvalue: ',cvalue.contador,
            ',total+cvalue: ',total+cvalue.count,']')
        return total+cvalue.count
    },ivalue)
    //console.log('j: ',j,'sum: ',sum)
    console.log(`${file}[fn: getTotalItemsInCart] | j: ${j}, sum: ${sum} `);
    console.log(`${file}[fn: getTotalItemsInCart] | cart: ${cart}`);
    //let total=5
    //cart.length
    return sum
  }

  function getItemsPriceCart() {
    
  }

    function getTotalPriceInCart() {
      let j=0; let ivalue=0
      console.log(`${file}[fn: getTotalPriceInCart] | string.cart: ${JSON.stringify(cart)}`);
      const sump=cart.reduce((total,cvalue) => { 
          j=j+1
          console.log('[cartContext.js][fn: getTotalPriceInCart] | ',
              '[title: ',cvalue.title,',cvalue: ',cvalue.contador,
              ',total+cvalue: ',total+cvalue.price*cvalue.count,']')
          return total+cvalue.price*cvalue.count
      },ivalue)
      console.log(`${file}[fn: getTotalPriceInCart] | j: ${j}, sum: ${sump} `);
      console.log(`${file}[fn: getTotalPriceInCart] | cart: ${cart}`);
      return sump
    }

  return (

    <cartContext.Provider value={{cart,monitor,addToCart,getTotalItemsInCart,
      addedToCart,setAddedToCart,checkInCart,removeItem,getTotalPriceInCart,setCart}}>
        {props.children}
    </cartContext.Provider>
    
  )
}

export {CartProvider} 