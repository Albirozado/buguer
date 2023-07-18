import React, {useState} from 'react';
import postProduto from '../api/FirebaseAPI';
import ColocarProduto from './ColocarProtutos';
import { uploadPostImage } from '../api/ImageUpload'
import CustumizeTheme from './MuiTexte';



export default function PostProduto(){
    const[produtoNome, setProdutoNome] = useState("") 
    const[produtoPrece, setProdutoPreco] = useState("") 
    const[produtoDescri, setProdutoDescri] = useState("") 

    const[postImage, setPostImage] = useState("")
    const [process, setProgress] = useState(0)


    const sendProduto = async () =>{
        let object = {
            nomeDoProduto: produtoNome,
            postImage: postImage,
            produtoPreco: produtoPrece,
            produtoDescri: produtoDescri,
        }

        await postProduto(object)
        await setProdutoNome ("")
        await setPostImage ("")
        await setProdutoPreco("")
        await setProdutoDescri("")


    

    }  

    return( 
        <ColocarProduto
        produtoNome = {produtoNome}
        setProdutoNome = {setProdutoNome}
        sendProduto = {sendProduto}
        uploadPostImage = {uploadPostImage}
        setPostImage = {setPostImage}
        postImage = {postImage}
        setProgress = {setProgress}
        process = {process}
        produtoPrece = {produtoPrece}
        setProdutoPreco = {setProdutoPreco}
        produtoDescri = {produtoDescri}
        setProdutoDescri = {setProdutoDescri}

        />

    )

}