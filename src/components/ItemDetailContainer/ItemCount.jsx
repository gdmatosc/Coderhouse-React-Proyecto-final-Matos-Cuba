import React, { useEffect,useState } from 'react'

function ItemCount(props) {
    //const {counter,setCounter}=props
    const {handleAddToCartCounting}=props
    const [count,setCount]=useState(1)
    console.log("[itemCount.jsx](msg) count: ",count);
    
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
          <br></br>
        </div>
        <button onClick={() => handleAddToCartCounting(count)} className="py-2 px-4 rounded border-emerald-700 border-solid border-8 font-bold " >
            Agregar</button>
    </div>
  )
}

export default ItemCount

// control.by.[usuario].cantidad de items de [productos]
