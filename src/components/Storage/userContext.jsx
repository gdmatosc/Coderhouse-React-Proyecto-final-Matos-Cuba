import { createContext,useState } from "react"
const file='[userContext.jsx]'

export const userContext = createContext({user:"anonymous"})

function UserProvider(props) {
    console.log(`${file}`)
    const [user, setUser] = useState("Anónimo")
    const logedin=true
    function test() {
        console.log(`${file}[test] | (prueba de props con funciones)`)
    }

    return (
        <userContext.Provider value={{user,logedin,test,setUser}}>
            {props.children}
        </userContext.Provider>
    )
}

export { UserProvider }