import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function PageNotFound() {
  const navigate=useNavigate()
  

  useEffect(() => {
    setTimeout(()=>{
        navigate("/")
      },2000)
  
  }, [])
  

  return (
    <div>
       <h1>Página no encontrada</h1>
       <small>Te estamos redirigiendo a la homepage...</small>
    </div>
  )
}

export default PageNotFound