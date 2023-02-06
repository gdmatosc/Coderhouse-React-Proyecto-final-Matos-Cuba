import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import LoaderList from '../Loader/LoaderList'
import { getOrden } from '../services/firebase'
const file='[MiOrden.jsx]'

function Filas(props) {
    //style={{width:"100px",marginRight:4}}
    return(
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {props.label}
                    </p>
                </div>
                <div className="flex-1 min-w-0">
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {props.value}
                </div>
            </div>
        </li>
    )
}
function MiOrden() {
  console.log(`${file}`)
  const [productos,setProductos]=useState([])
  const [isLoading, setIsLoading] = useState(true)
  let params=useParams()  
  console.log(`${file} | params: ${JSON.stringify(params)}`)
  console.log(`${file} | params.itemid: ${params.orderid}`)

  useEffect(() => {
    // lectura de datos de bd de [productos]
    getOrden(params.orderid)
    .then((respuesta)=>{
        console.log(`${file}[useEffect][fn: getOrden][.then] | respuesta: ${JSON.stringify(respuesta)}`)
        console.log(`${file}[useEffect][fn: getOrden][.then] | respuesta.buyer: ${JSON.stringify(respuesta.buyer)}`)
        console.log(`${file}[useEffect][fn: getOrden][.then] | respuesta.buyer.phone: ${respuesta.buyer.phone}`)
        setProductos(respuesta)
        setIsLoading(false)
    })
    .catch((error) => alert(error))
  },[])
  return (
    <div>
        {
        isLoading ?
            <div>
              <LoaderList/>
            </div>
        : 
        <div>
            <h1 className='my-6 text-yellow-400 font-bold text-2xl' >Resumen de la orden de compra</h1>
            <div className=" mx-auto max-w-md p-4 border rounded-lg shadow sm:pt-8 sm:pb-2 sm:px-8 bg-gray-800 border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-sm font-bold leading-none text-gray-900 dark:text-white">
                    Nombre: {productos.buyer.name} </h5>
                    
                </div>
                <div className="flex items-center justify-between mb-4">
                    
                    <span className="text-sm font-medium  hover:underline dark:text-blue-100">
                        Fecha: {new Date(productos.date.seconds*1000).toLocaleDateString("es-PE", { year: 'numeric', month: 'numeric', day: 'numeric',hour:'numeric',minute:'numeric'})}
                    </span>
                    <span className='text-yellow-400'>
                        total: {productos.total}
                    </span>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                       <Filas label={'Número de orden'} value={params.orderid}/> 
                       <Filas label={'Phone'} value={productos.buyer.phone}/> 
                       <Filas label={'Email'} value={productos.buyer.email}/> 
                    </ul>
                </div>
            </div>

            <h1 className='my-6 text-yellow-400 font-bold text-xl' >Productos comprados</h1>

            <div>
                <table  className="mx-auto text-sm text-left text-white bg-gray-500">
                    <thead className="text-xs  text-gray-100 uppercase bg-gray-700 ">
                        <tr >
                            <th className="px-6 py-3">Titulo</th>
                            <th className="px-6 py-3">Precio</th>
                            <th className="px-6 py-3">Cantidad</th>
                            <th className="px-6 py-3">Sub total</th>
                        </tr>
                    </thead>
                    <tbody>
                        { productos.items.map((item) => (
                            <tr className=" border-b bg-gray-900 border-gray-700" key={item.id}>
                                <td className="px-6 py-3">{item.title}</td>
                                <td className="px-6 py-3">{item.price}</td>
                                <td className="px-6 py-3">{item.count}</td>
                                <td className="px-6 py-4 font-bold text-yellow-300">{item.price*item.count}</td>
                            </tr>
                            ))}
                    </tbody>
                </table>
                
            </div>
        </div>
        }

        <div className="seccion2">
              <br/>
              <p></p> 
        </div>
    </div>
  )
}

export default MiOrden
