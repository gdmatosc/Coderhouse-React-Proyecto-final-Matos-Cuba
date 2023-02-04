const file='[mockService.js]'
console.log(`${file}`)
const database=[
    {
        id:1,
        title:'mouse',
        category: 'perifericos',
        stock: 5,
        imgurl: "/periferico_mouse.jpg",
        detail: 'ok',
        price: 10
    },

    {
        id:2,
        title:'acces point',
        category: 'comunicaciones',
        stock: 5,
        imgurl: "/comunicaciones_accesspoint.jpg",
        detail: 'ok',
        price: 20
    },
    {
        id:3,
        title:'estabilizador',
        category: 'electricos',
        stock: 5,
        imgurl: "/electrico_estabilizador.jpg",
        detail: 'ok',
        price: 30
    },
    {
        id:4,
        title:'camara',
        category: 'perifericos',
        stock: 5,
        imgurl: "/periferico_camara_externa_1.jpg",
        detail: 'ok',
        price: 40
    }
]

function obtenerProductos() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(database)
    },1000)
  })
}


function getProducto(idURL) {
  return new Promise((resolve,reject)=>{
    const reqItem=database.find((item)=>{
        console.log(item.id,idURL)
        return item.id === parseInt(idURL)
    })
    console.log(`${file}[fn: getProducto] reqItem: ${reqItem}`)
    setTimeout(()=>{
        if (reqItem) 
            resolve(reqItem)
        else 
            reject ("No se encontró el producto")
    },1000)
  })
}

function getProductosByCategory(categoryURL) {
    return new Promise((resolve,reject)=>{
      let reqItem=database.filter((item)=>{
        console.log(`${file}[fn: getProductosByCategory] | item.id: ${item.id}, categoryURL: ${categoryURL}`)
        return item.category === categoryURL
      })
  
      setTimeout(()=>{
          if (reqItem) 
              resolve(reqItem)
          else 
              reject ("No se encontró la categoría")
      },1000)
    })
  }

export default obtenerProductos

export { getProducto, getProductosByCategory }
