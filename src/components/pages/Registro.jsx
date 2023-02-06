import React from 'react'
import { useContext } from 'react'
import { userContext } from '../Storage/userContext'
const file='[Registro.jsx]'

function Registro(props) {

  const {user,setUser,test} = useContext(userContext)
  console.log(`${file} user: ${user}`);

  function handleOperacionesEnvioSubmit(evt) {
    //Envio datos [Form]
    evt.preventDefault()
    console.log("[Registro.jsx](msg) Enviamos el form",evt)
    //captura [nombre de Usuario] Ingresado
    let user=evt.target.elements[0].value
    console.log("[Registro.jsx][handleUsuarioIngresado](msg) user: ",user)
    //props.bienvenida(user)
    setUser(user)
  }

  function handleDigitosIngresadosNombre(evt) {
    let key=evt.key.toLowerCase()
    const blockChars="0123456789#&%'\"*?()=\\[]{}+*|-.;,¿¡/~$´^`°¬_!"

    if (blockChars.includes(key)) {
        console.log("[Registro.jsx](msg) Presionaste: ",key)
        evt.preventDefault()
    }
  }

  function handleDigitosIngresadosExperimental(evt) {
    let key=evt.key.toLowerCase()
    const blockChars="[1-9]{1}[0-9]{9}"

    if (!blockChars.includes(key)) {
        console.log("[Registro.jsx](msg) Presionaste: ",key)
        evt.preventDefault()
    }
  }

  function handleDigitosIngresadosDireccion(evt) {
    let key=evt.key.toLowerCase()
    const blockChars="#&%'\"*?()=\\[]{}+*|¿¡;/~$´^`°¬_!"

    if (blockChars.includes(key)) {
        console.log("[Registro.jsx](msg) Presionaste: ",key)
        evt.preventDefault()
    }
  }


 

  return (
    <div className='seccion1 container m-8 py-4 px-1 mx-auto text-center '>
        {
            user!=="Anónimo" ?
            <div><h1 className='py-24 text-blue-100 font-bold text-2xl'>Registrado!</h1></div>
            : 
            <div>
                <h1 className='my-4 text-yellow-400 font-bold text-2xl'> 
                    Formulario de registro para promociones</h1>
                <form className='inline-block bg-gray-900 mx-8 px-8 pt-8'  onSubmit={handleOperacionesEnvioSubmit}>
                    {/* ingreso de usuario */}
                    <div className="mb-6">
                        <label htmlFor="ejemplo" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' >
                            Ingrese su nombre
                        </label>
                        <input onKeyDown={handleDigitosIngresadosNombre}
                            type="text" id="ejemplo"
                            className='block | w-full p-2.5 | border-gray-300 rounded-lg focus:border-blue-500 | bg-gray-50 border focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 |
                                    text-gray-900 text-sm dark:text-white'
                            placeholder='ingrese su nombre' required/>
                    </div>
                    {/* ingreso de dirección */}
                    <div className="mb-6">
                        <label htmlFor="ejemplo" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' >
                            Ingrese su dirección
                        </label>
                        <input onKeyDown={handleDigitosIngresadosDireccion} 
                            type="ejemplo" id="ejemplo"
                            className='block | w-full p-2.5 | border-gray-300 rounded-lg focus:border-blue-500 | bg-gray-50 border focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 |
                                    text-gray-900 text-sm dark:text-white '
                            placeholder='ingrese su dirección' required/>
                    </div>
                    
                    {/* envío de datos */}
                    <div >
                        <button type="submit" className=' mb-4 py-2 px-4 rounded bg-teal-500 hover:bg-teal-800 text-white font-bold'>
                        Enviar</button>
                    </div>
                </form>
                <div className='p-8'></div>
            </div>
        }
        
    </div>
  )
}

export default Registro
