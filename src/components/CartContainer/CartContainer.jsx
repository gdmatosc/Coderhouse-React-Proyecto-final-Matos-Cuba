import React,{ useContext } from 'react'
import { createOrder } from '../services/firebase'
import { cartContext } from '../Storage/cartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../Storage/userContext'
import FormCheckOut from '../FormCheckOut/FormCheckOut'
import { useState } from 'react'
const file='[CartContainer.jsx]'

function CartContainer() {

    const navigateTo=useNavigate()
    const [orderId,setOrderId]=useState()
    const {cart,removeItem,getTotalPriceInCart,setCart}=useContext(cartContext)
    console.log(`${file} cart: ${cart}`)
    console.log(`${file} cart.length: ${cart.length}`)

    function handleCheckOut(evt,userData) {
        evt.preventDefault()
        const items=cart.map(({id,price,title,count})=>({
            id,price,title,count}))
        const order={
            buyer: userData,
            items: items, 
            total: getTotalPriceInCart(),
            date: new Date()
    }
    
    console.table(order)

    createOrder(order).then((id) => { 
        Swal.fire({
            title: 'Gracias por tu compra',
            text: `Este es tu ticket id ${id}`,
            icon: 'success',
            confirmButtonText: 'Listo'
            }).then((result) => {
            if (result.isConfirmed) {
                console.log(`${file}[fn: createOrder] Buena!`)
                setCart([])
                navigateTo(`/thank-you/${id}`)
            }
            })    
        })
    }
  
    return (
    <div className='seccion1'>
        {
            cart.length==0 ?
                
                    <h1 className='py-24 text-blue-100 font-bold text-2xl'>Aún no ha agregado productos al carrito</h1>
                
            :
            <div className='shadow-md sm:rounded-lg' >
                <h1 className='my-4 text-yellow-400 font-bold text-2xl' >Carrito de compras</h1>
                    <table  className="mx-auto text-sm text-left text-white bg-gray-500">
                        <thead className="text-xs  text-gray-100 uppercase bg-gray-700 ">
                            <tr >
                                <th className="px-6 py-3">Miniatura</th>
                                <th className="px-6 py-3">Titulo</th>
                                <th className="px-6 py-3">Precio</th>
                                <th className="px-6 py-3">Cantidad</th>
                                <th className="px-6 py-3"> Remover</th>
                                <th className="px-6 py-3">Sub total</th>
                            </tr>
                        </thead>
                        <tbody>
                            { cart.map((item) => (
                                <tr className=" border-b bg-gray-900 border-gray-700" key={item.id}>
                                    <td className="px-6 py-3"><img className='h-10'  src={item.imgurl} alt={item.title}/></td>
                                    <td className="px-6 py-3">{item.title}</td>
                                    <td className="px-6 py-3">{item.price}</td>
                                    <td className="px-6 py-3">{item.count}</td>
                                    <td className="px-6 py-3">
                                        <button className="mr-auto my-3 py-2 px-2 rounded bg-red-600 hover:bg-red-800 text-white font-bold ">
                                            X</button>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-yellow-300">{item.price*item.count}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                    <br></br>  
                    <div >
                        <h2  >
                            <span className='text-white'>El total de tu compra es: </span>
                            <span className=' rounded-lg bg-yellow-100 font-bold text-xl text-black p-2 m-2 '>${getTotalPriceInCart()}</span></h2>
                    </div>
                    
                    <h1 className='my-6 text-yellow-400 font-bold text-2xl' >Llenar los datos de compra para finalizar</h1>
                    <FormCheckOut onCheckOut={handleCheckOut} />
                    <div className='p-8'></div>
            </div>
            
        }
        
    </div>

  )
}

export default CartContainer

