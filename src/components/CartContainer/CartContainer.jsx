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
    <div>
        {
            cart.length==0 ?
                <div>
                    <h1>Aún no ha agregado productos al carrito</h1>
                </div>
            :
            <div>
                <h1 >Carrito de compras</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Miniatura</th>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Remover</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            { cart.map((item) => (
                                <tr key={item.id}>
                                    <td><img className='h-10'  src={item.imgurl} alt={item.title}/></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.count}</td>
                                    <td>
                                        <button className="mr-auto my-3 py-2 px-2 rounded bg-red-600 hover:bg-red-800 text-white font-bold ">
                                            X</button>
                                    </td>
                                    <td>{item.price*item.count}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                            
                    <div>
                        <h4>El total de tu compra es: ${getTotalPriceInCart()}</h4>
                    </div>
                    <br></br>
                    <FormCheckOut onCheckOut={handleCheckOut} />
                    
            </div>
            
        }
        
    </div>

  )
}

export default CartContainer

