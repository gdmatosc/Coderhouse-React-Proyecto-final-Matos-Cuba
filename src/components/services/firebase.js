// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"
const file='[firebase.js]'
console.log(`${file}`)
// todo: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKBqFmQQBQwK70V39vo8GqDAPQx94d8N8",
  authDomain: "react-coderhouse-preliminar.firebaseapp.com",
  projectId: "react-coderhouse-preliminar",
  storageBucket: "react-coderhouse-preliminar.appspot.com",
  messagingSenderId: "230172131035",
  appId: "1:230172131035:web:08bd94338952e08a7416fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db=getFirestore(app)

export async function obtenerProductos() {
    const productsRef=collection(db,"products")
    const snapshot= await getDocs(productsRef)
    const productos= snapshot.docs.map((elem) => {
        let producto=elem.data()
        producto.id=elem.id
        return producto
    })
    console.log(`${file}[fn: obtenerProductos] | productos: `,productos)

    return productos
}

export async function getProducto(idParams){
    const productsRef=collection(db,"products")
    const docRef= doc(productsRef,idParams)
    const snapshot=await getDoc(docRef)
    console.log(`${file}[fn: getProducto] | snapshot.data(): `,snapshot.data())

    return {...snapshot.data(),id:snapshot.id}
}

export async function getProductosByCategory(categoryURL) {
    const productsRef=collection(db,"products")
    const q=query(productsRef,where("category","==",categoryURL))
    const snapshot=await getDocs(q)

    const productos= snapshot.docs.map((elem) => {
        let producto=elem.data()
        producto.id=elem.id

        return producto
    })
    console.log(`${file}[fn: getProductosByCategory] | productos: `,productos)

    return productos
}

export async function getOrden(idParams){
    const orderRef=collection(db,"order")
    const docRef= doc(orderRef,idParams)
    const snapshot=await getDoc(docRef)
    console.log(`${file}[fn: getOrder] | snapshot.data(): `,snapshot.data())

    return {...snapshot.data(),id:snapshot.id}
}

export async function createOrder(order) {
    const orderRef=collection(db,"order")
    let respuesta=await addDoc(orderRef,order)
    console.log(`${file}[fn: createOrder] | respuesta.id: `,respuesta.id)

    return respuesta.id
}

export default db
