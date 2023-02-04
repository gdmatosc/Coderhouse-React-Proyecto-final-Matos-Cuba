// import { useState } from "react"
import { Link } from "react-router-dom"

function Item(props) {
  const {title,price,imgurl,category,id}=props.item
  return (
    <div >
        <div>
            <h2>{title}</h2>
        </div>

        <div >
            <img className="max-h-80 object-contain" src={imgurl} alt={title}/>
        </div>
            
        <div>
            <h3>$ {price}</h3>
            <small>{category}</small>
        </div>

        <Link to={`/detalle/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                Ver más
            </button>
        </Link>
        
        <br></br>
    </div>
  )
}

export default Item