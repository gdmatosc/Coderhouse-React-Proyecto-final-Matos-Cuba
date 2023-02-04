import React from 'react'
import { useState,useEffect } from 'react'
const file='[FormCheckOut.jsx]'

function handleDigitosIngresadosNombre(evt) {
    console.log(`${file}`)
    let key=evt.key.toLowerCase()
    const blockChars="0123456789#&%'\"*?()=\\[]{}+*|@-.;,¿¡/~$´^`°¬_!"

    if (blockChars.includes(key)) {
        console.log(`${file}[fn: handleDigitosIngresadosNombre] | (presionaste) key: ${key}`)
        evt.preventDefault()
    }
  }

function handleDigitosIngresadosCorreo(evt) {
    let key=evt.key.toLowerCase()
    const blockChars="#&%'\"*?()=\\[]{}+*|;,¿¡/~$´^`°¬_!"

    if (blockChars.includes(key)) {
        console.log(`${file}[fn: handleDigitosIngresadosCorreo] | (presionaste) key: ${key}`)
        evt.preventDefault()
    }
  }

function InputForm(props) {
    return(
        <div  style={{display:"flex",marginBottom: 8}}>
            <label style={{width:"100px",marginRight:4}}>
                {props.label}</label>
            {
                props.name=="name" ?
                    <input onKeyDown={handleDigitosIngresadosNombre} value={props.value} 
                        name={props.name} type="text" onChange={props.onChange} />
                : props.name=="phone" ?
                    <input value={props.value} 
                        name={props.name} type="number" onChange={props.onChange} />
                :   <input onKeyDown={handleDigitosIngresadosCorreo} value={props.value} 
                        name={props.name} type="text" onChange={props.onChange} />
            }
            
        </div>
    )
}

export default function FormCheckOut(props) {
  const {onCheckOut}=props
  const [userData,setUserData]=useState({name:"",phone:"",email:""})
  let fieldsForm=Object.keys(userData)
  console.log(`${file}[fn-main: FormCheckOut] fieldsForm: ${fieldsForm}`)
  console.log(`${file}[fn-main: FormCheckOut] userData: ${JSON.stringify(userData)}`)

  function onInputChange(evt) {
    let value=evt.target.value
    let inputName=evt.target.name
    let newState={...userData}
    newState[inputName]=value
    setUserData(newState)
  }

  function onSubmit(evt) {
    evt.preventDefault()
    console.log(`${file}[fn-main: FormCheckOut] (Gracias por tu compra!)`)
  }

  function formIsInvalid() {
    return !(
        userData.name !== "" &&
        userData.phone !=="" &&
        userData.email !== "")
  } 

  return (
    <div>
        <form onSubmit={onSubmit}>
            <h1>Llenar los datos de compra para finalizar</h1>

            {
            fieldsForm.map((field)=>(
                <InputForm 
                    value={userData[field]} name={field}  key={field}
                    onChange={onInputChange} label={field} userData={userData} />
            ))
            }
            
            <button type="submit" disabled={formIsInvalid()} className="py-2 px-4 rounded bg-teal-500 hover:bg-teal-800 text-white font-bold "
                onClick={(evt)=> onCheckOut(evt,userData) } >
                crear orden</button>
            <span> </span>
            <button className="mr-auto my-3 py-2 px-2 rounded bg-red-600 hover:bg-red-800 text-white font-bold "
                onClick={()=>setUserData({name:"",phone:"",email:""})}>
                Limpiar</button>
        </form>
    </div>
  )
}


