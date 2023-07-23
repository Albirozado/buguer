import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';
import { enviarPedido } from '../api/FirebaseAPI';
import emailjs from '@emailjs/browser';
import styles from "../StylesSheets/LayoutStyles.module.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'; 

const DetalhesProduto = () => {
  const [produto, setProduto] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const [clienteNome, setClienteNome] = useState("");
  const [entrega, setEntrega] = useState(false)
  const [pedidoForma, setPedidoForma] = useState("")
  const [telefone, setTelefone] = useState("")
  const [localizacao, setLocalizacao] = useState("")
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    if(entrega == false){
      setOpen(true)
    }
  }
  const handleClose = () => setOpen(false);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vktqg0b', 'template_lzjpscd', form.current, 'fQLkkr_ZTg9HZK31X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
const data = new Date()

data.setHours(data.getHours() + 1)
const horas = data.getHours().toString().padStart(2, '0')
const min = data.getMinutes().toString().padStart(2, '0')
const horasRetif = horas - 1
const mes = data.getMonth() + 1
const dia = data.getDate()
const pedidoData = `${dia}/${mes}/ ${horasRetif}:${min}`
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: "100%",
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: "center"

  
};





  const params = useParams();

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const produtoRef = doc(firestore, 'produto', params.id);
        const produtoDoc = await getDoc(produtoRef);
        if (produtoDoc.exists()) {
            setProduto(produtoDoc.data());
        } else {
          console.log('Documento não encontrado');
        }
      } catch (error) {
        console.log('Erro ao buscar o produto:', error);
      }
    };

    fetchProduto();
  }, [params.id]);
  if (!produto) { 
    return(
      <div className={styles.StackPro}  style={{padding: "3rem 3%" }}>
      <Stack spacing={1} sx={{ maxWidth: "100%"}}>
        <Skeleton variant="rounded" sx={{ bgcolor: 'grey.800', maxWidth: "100%"}} animation="wave"  width={500} height={300}/>
      </Stack>     
    </div> 
    )
    
  }
  let produtoNome = produto.nomeDoProduto
  let valorPagar = quantidade * produto.produtoPreco

  const sendPedido = async () =>{
    let object = {
        nomePedido: produtoNome,
        nomeDoCliente: clienteNome,
        pedidoQuantidade: quantidade,
        valoraApagar: valorPagar,
        formaDePedido: pedidoForma,
        clienteTelefone: telefone,
        localiZacao: localizacao,
        horaDoPedido: pedidoData,


      
    }
    await enviarPedido(object)
    await setClienteNome("")
    await setQuantidade(0)
    await setPedidoForma("")
    await setTelefone("")
    await setQuantidade ("")
    await setLocalizacao ("")
    await pedidoData("")
    
  }


  const enviarParaTodoLado = (e) => {
    e.preventDefault();
    sendPedido();
    sendEmail(e);
    setEntrega(false)
    handleOpen()
    
  };

  return (
    <div>
            <Paper
            
      sx={{
        
        p: 1.5,
        maxWidth: 500,
        alignItems: "center",
        boxShadow: 0,
        display: "block",
        bgcolor: "transparent", 
        border: "solid 1px grey",


      }}
      className={styles.contente}
    >
      <Grid container spacing={2} justify="center"   columns={{ xs: 1, sm: 12, md: 12 }}>
        <Grid item md={5} container maxWidth="100%" direction="column">
          <div className={styles.boxPreviewImage}>
            <img alt="complex" src={produto.postImage} className={styles.image}  />
          </div>
        </Grid>
        
          <Grid item md={7}  container direction="column" spacing={0}>
    
              <h2 className={styles.produtoNomePreview}>
                {produto.nomeDoProduto}
              </h2>
              <p className={styles.paragrafoPreview}>
                {produto.produtoDescri}
              </p>
              <span className={styles.precoPreview}>{produto.produtoPreco}MZN</span>
              <div className="coolinput">
                <label htmlFor="input" className="text">Nome:</label>
                <input type="text" placeholder="escreva o seu nome" name="input" className="input"
                  onChange={(event) => setClienteNome(event.target.value)}
                  value={clienteNome}
                
                />
              </div>
              <div className="coolinput">
                <label htmlFor="input" className="text">Telefone:</label>
                <input type="text" placeholder="digite o seu telefone" name="input" className="input"
                  onChange={(event) => setTelefone(event.target.value)}
                  value={telefone}
                
                />
              </div>
              
              <div>
                <label className="text" style={{textTransform: "uppercase", color: "#fff", fontWeight: "500", fontSize: "0.8rem"}}>Quantidade:</label>
                <div style={{display: "flex", alignItems: "center"}}>
                  <span className={styles.maisMenus} onClick={()=>{quantidade  == 1 ? null : setQuantidade (quantidade - 1)}}><RemoveOutlinedIcon /></span>
                  <input type="number" style={{color: "#ccc",width: "4rem", height: "1.5rem", outline: "none", textAlign: "center", backgroundColor: "transparent", border: "1px solid #ccc", margin: "0 0.23rem", borderRadius: ".2rem"}}
                  onChange={(event) => setQuantidade(event.target.value)}
                  value={quantidade}
                  />
                  <span className={styles.maisMenus} onClick={()=> setQuantidade (quantidade + 1)}><AddOutlinedIcon/></span>
                </div>

              </div>

              <p style={{color: "white", margin: "1rem 0", fontWeight: "600"}}>TOTAL A PAGAR: <span style={{color:"#FD7E05", marginLeft: "0.1rem", fontWeight: "500"}}>{valorPagar}mts</span></p>

              <div className="radio-buttons-container">
                <div class="radio-button">
                  <input name="radio-group" id="radio2" className="radio-button__input" type="radio" onClick={()=>setEntrega(true)}
                  onChange={(event) =>setPedidoForma(event.target.value)}
                  value= "Entrega" 
                  
                  checked = {pedidoForma === "Entrega"}               
                  
                  />
                  <label htmlFor="radio2" className="radio-button__label" >
                    <span className="radio-button__custom"></span>
                        Entrega
                  </label>
                </div>
                <div className="radio-button">
                  <input name="radio-group" id="radio1" className="radio-button__input" type="radio" onClick={()=>setEntrega(false)}
                  onChange={(event) =>setPedidoForma(event.target.value)}
                  value= "para levar" 
                  
                  checked = {pedidoForma === "para levar"}               
                  />
                  <label htmlFor="radio1" className="radio-button__label">
                    <span className="radio-button__custom"></span> 
                    
                    Para levar
                  </label>
                </div>
            
                <form ref={form} style={{display:"none"}} >
                <textarea name="message" value={"acabaste de receber um pedido"}/>
                </form>
            
                </div>
                {entrega ? (
                  <div className="coolinput">
                  <label htmlFor="input" className="text">Localizaçao:</label>
                  <input type="text" placeholder="escreva a sua localizaçao" name="input" className="input"
                  onChange={(event) => setLocalizacao(event.target.value)}
                  value={localizacao}

                  />
                  </div>                
                ) : null }
                   <div style={{margin: "0 1rem", }}
>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1,
                      ml: 1,
                    }}
                  >
                    <Box sx={style}>
                        <p style={{fontSize: "1.2rem", lineHeight: "1.5rem"}}> O seu pedido estara pronto ate as:</p>
                        <p style={{fontWeight: "900", marginTop: "1rem", fontSize: "1.2rem"}}>{horas} : {min}</p>
                    </Box>
                  </Modal>
                </div>

              <Button variant="solid" color="error" sx={{mt: 1,color: "#FD7E05",}} style={{border:"solid 1px #FD7E05"}} onClick={enviarParaTodoLado}>
                <span className={styles.deletar}>

              enviar pedido
                </span>
              </Button>  
        </Grid>
      </Grid>
    </Paper>
      
    </div>
  );
  
}



export default DetalhesProduto