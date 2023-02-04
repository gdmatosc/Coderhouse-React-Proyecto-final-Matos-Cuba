import { useEffect } from "react";
import { useState } from "react";
import { getProductosByCategory } from "../services/firebase";
import { obtenerProductos } from "../services/firebase";
import { useParams } from "react-router-dom";
import Item from "./Item";
import LoaderList from "../Loader/LoaderList";

function ItemListContainer(props) {
    const [productos,setProductos]=useState([])
    const [isLoading, setIsLoading] = useState(true)
    console.log("Renderizado ItemListContainer","background-color: blue")
    let { categoryid }=useParams()
    console.log("Renderizando")

    useEffect(()=>{
      if (!categoryid){
        obtenerProductos()
        .then((respuesta)=>{
          setProductos(respuesta);
        })
        .catch((error) => alert(error))
        .finally(() => setIsLoading(false))
      } else{
        getProductosByCategory(categoryid)
        .then((respuesta)=>{
          setProductos(respuesta)
          setIsLoading(false)
        })
        .finally(() => setIsLoading(false))
      }
    },[categoryid])
    
    return ( 
        <div>
            
                {
                  isLoading ?
                    <div>
                      {/* <h3>Cargando...</h3> */}
                      <LoaderList/>
                    </div>
                    
                   : 
                   <div className="seccion1 md:mr-auto md:flex md:gap-4 font-bold text-2xl pt-4">
                      {productos.map((itemIterado)=>{
                       return(
                         <Item 
                           id={itemIterado.id} key={itemIterado.id} item={itemIterado}/>)
                      })}
                  </div>
                }
                

            <div className="seccion2">

              <br/>

              <p>
                 </p>
                
            </div>
        </div>
        
     )
}

export default ItemListContainer;


{/* <br/>

<h1 className="text-3xl font-bold text-yellow-500" >
  Inicio</h1>

<br/> 
      // return ()=> console.log('desmontamos ILC')

<h2 className="text-2xl font-bold">
  {props.text} </h2>

<br/>  */}