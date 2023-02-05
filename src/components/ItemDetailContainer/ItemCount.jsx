import React, { useEffect,useState } from 'react'
const file='[ItemCount.jsx]'

function ItemCount(props) {
    console.log(`${file}`)
    const {handleAddToCartCounting}=props
    const [count,setCount]=useState(1)
    console.log(`${file} | count: ${count}`)
    
    const increase=()=>{
        setCount(count=>count+1)
      }
    const decrease=()=>{
      if (count>1){
          setCount(count=>count-1)
      }  
    }

  return (
    <div>
        <button onClick={increase} id="incrementador"  className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded">
            +</button>
        <span> {count} </span>
        <button onClick={decrease} id="reducidor" className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded">
            -</button>
        <div>
        
        </div>
        <button onClick={() => handleAddToCartCounting(count)} className="m-4 py-2 px-6 rounded bg-teal-100 border-teal-800 border-solid border-8 font-bold " >
            Agregar</button>
    </div>
  )
}

export default ItemCount

