import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import { userContext } from "../Storage/userContext"
import { useContext } from "react"
const file='[NavBar.jsx]'

function NavBar(props){
    console.log(`${file}`)
    const {user,test} = useContext(userContext)
    test()

    return(
        <header className=" bg-teal-800 md:flex px-4 flexitems-center  gap-16">
            <Link to="/">
                <img src="/compuwork_icon_bg.svg" alt="img" className="mr-auto my-0.5 h-16 md:mr-0"/>
            </Link>

            <nav className="mr-auto flex sm:gap-2 md:gap-8  md:justify-between font-bold sm:text-xl md:text-2xl  text-white pt-4">
                <Link to="/category/perifericos" className="hover:text-yellow-400" >
                    Perifericos</Link>
                <Link to="/category/comunicaciones" className="hover:text-yellow-400" >
                    Comunicaciones</Link> 
                <Link to="/category/electricos" className="hover:text-yellow-400" >
                    Electricos</Link>
            </nav>
            
            <div className="md:mr-auto md:flex md:gap-4" >
                <Link to="/cart">
                    <CartWidget/>
                </Link>
                <span className="mr-auto my-2 py-3 px-2 rounded bg-green-800 text-white font-bold" >
                    {user}</span>
                <Link to="/registro">
                    <button onClick={props.registro} className="mr-auto my-3 py-2 px-2 rounded bg-red-600 hover:bg-red-800 text-white font-bold ">
                    Registro</button></Link>
            </div>
       </header> 
    )
}

export default NavBar
