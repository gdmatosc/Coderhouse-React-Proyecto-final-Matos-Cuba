import { createContext,useState } from "react"

export const userContext = createContext({user:"anonymous"})

function UserProvider(props) {
    //const user="Santiago"
    const [user, setUser] = useState("Anónimo")
    const logedin=true
    function test() {
        console.log("[userContext.js](msg) testing");
    }

    return (
        <userContext.Provider value={{user,logedin,test,setUser}}>
            {props.children}
        </userContext.Provider>
    )
}

export { UserProvider }