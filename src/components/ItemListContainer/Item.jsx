import { Link } from "react-router-dom"

function Item(props) {
    
  const {title,price,imgurl,category,id}=props.item
    //max-h-80
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4 " >
        <div className="ly: block overflow-hidden |bxsz: 0 |br: rounded-lg |bgr: bg-white text-black">
       

        <div >
            <img className="h-full w-full object-cover m-auto" src={imgurl} alt={title}/>
        </div>

        <div>
            <h2 className="bxsz: mt-2 mb-2 |br: 0 |bgr: 0 |txt: font-bold text-black |anim: 0" >
              {title}</h2>
            
            <span className="ly: inline-block |bxsz: px-2 py-1 leading-none |br: rounded-full |bgr: bg-orange-200 |txt: text-orange-800 font-semibold uppercase tracking-wide text-xs |anim: 0 ">
            {category}</span>
        </div>
            
        <div className="ly: flex flex-row |bxsz: space-x-1 py-4 mt-4 mb-0 |br: border-t border-b border-gray-200 |bgr: 0 |txt: text-grey-500 |anim: 0 ">
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