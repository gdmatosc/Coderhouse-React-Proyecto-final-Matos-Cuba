import { Link } from "react-router-dom"

function Item(props) {
    
  const {title,price,imgurl,category,id}=props.item
    //max-h-80
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4 " >
        <div className="block overflow-hidden | rounded-lg | bg-white text-black">
       

        <div >
            <img className="h-full w-full object-cover m-auto" src={imgurl} alt={title}/>
        </div>

        <div>
            <h2 className="mt-2 mb-2  | font-bold text-black |anim: 0" >
              {title}</h2>
            
            <span className="inline-block | px-2 py-1 leading-none | rounded-full | bg-orange-200 | text-orange-800 font-semibold uppercase tracking-wide text-xs ">
            {category}</span>
        </div>
            
        <div className="flex flex-row | space-x-1 py-4 mt-4 mb-0 | border-t border-b border-gray-200 | text-grey-500 ">
          <div className='text-center m-auto'>
            <span className=" inline-block  txt: font-bold text-2xl text-black">
            $ {price}</span>
          </div>
        </div>

        <Link to={`/detalle/${id}`}>
            <button className="m-4 py-2 px-8 rounded bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold  " >
                Ver más
            </button>
        </Link>
        
        <br></br>
        </div>
    </div>
  )
}

export default Item