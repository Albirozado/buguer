import {firestore} from '../firebaseConfig'
import{addDoc, collection, onSnapshot, doc, deleteDoc, orderBy, query, serverTimestamp, limit} from "firebase/firestore"
import { toast } from 'react-toastify'
let dbRef = collection(firestore, "produto")
let enviarPedi = collection(firestore, "pedido")

const postProduto = (object) => {
    const data = {
      ...object,
      timestamp: serverTimestamp()
    };
    

    addDoc(dbRef, data)
    .then((res) =>{
        toast.success("dados enviados com sucesso")

    })
    .catch((err) =>{
        toast.error("dados nao enviados")
        
    })



}
export const getStatus = (setAllStatus) =>{
    onSnapshot(query(dbRef, orderBy('timestamp', 'asc')), (response) => {
        setAllStatus(response.docs.map((docs)=>{
            return{...docs.data(), id: docs.id}
        }))

    })
     
}

export const enviarPedido = (object) =>{
    const data = {
        ...object,
        timestamp: serverTimestamp()
      };
      


    addDoc(enviarPedi, data)
    .then((res) =>{
        toast.success("pedido enviado com sucesso")

    })
    .catch((err) =>{
        toast.error("pedido nao enviado")
        
    })
    
}

export const getPedidos = (setAllPedidos) =>{
    onSnapshot(query(enviarPedi, orderBy('timestamp', 'desc')), (response) => {
        setAllPedidos(response.docs.map((docs)=>{
                return{...docs.data(), id: docs.id}
            }))

    })
     
}

export const getPreview = (setPreview) =>{
    onSnapshot(query(dbRef, orderBy('timestamp', 'desc'), limit(2)), (response) => {
        setPreview(response.docs.map((docs)=>{
                return{...docs.data(), id: docs.id}
            }))

    })
     
}





export const deletePost = (id) =>{
    let docToDelete = doc(dbRef, id)
    try{
        deleteDoc(docToDelete)
        toast.success("dados deletado com sucesso")

        
    } catch(err){
        console.log(err)
    }

}

export const deletePedido = (id) =>{
    let docmentToDelete = doc(enviarPedi, id)
    try{
        deleteDoc(docmentToDelete)
        toast.success("dados deletado com sucesso")

        
    } catch(err){
        console.log(err)
    }

}

export default postProduto


