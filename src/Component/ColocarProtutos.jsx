import React from 'react';
import { Progress } from 'antd';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import styles from "../StylesSheets/LayoutStyles.module.css"
import MostrarPreview from './MostrarPreview';

import {capitalize, colors, createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette:{
    primary:{
          main: "#FD7E05"
      }

  },
  typography: {
      button:{
          fontSize: 16,
          fontWeight: 500,
          textTransform:capitalize,
          padding: '0 1px',
          
      
         
          

      }
    },
  
})

const ColocarProduto = ({ produtoNome, setProdutoNome, sendProduto, uploadPostImage, setPostImage, postImage, process, setProgress, produtoPrece, setProdutoPreco,produtoDescri, setProdutoDescri }) => {

  return (
    <div>

      {process === 0 || process === 100 ? (
        <></>
      ) : (
        <div className={styles.progress} >
          <Progress type="circle" percent={process} trailColor="#D9D9D9" strokeWidth={2.8}  size={80} status="active" strokeColor={{ from: '#FD7E05', to: '#FD7E05' }}  format={(percent) => <span className="colored-value">{percent}%</span>}/>
        </div>
      )}
      {postImage.length > 0 ? (
        <div className={styles.imagem}>
          <img className={styles.postimage} src={postImage} alt='postImage' style={{width:"12rem", maxWidth:"100%"}} />
        </div>
      ) : (
        <></>
      )}
      <div className={styles.enviarProdutoContainer}>
        <div className={styles.boxProduto}>
          <div className={styles.butao}>
            <label htmlFor="pic-upload" className={styles.btnUpload}><AddPhotoAlternateOutlinedIcon className={styles.iconbtn} style={{ fontSize: 24 }} /> <span>carregar</span> </label>
          </div>
        <input type="file" name="" id="pic-upload" hidden onChange={(event) => uploadPostImage(event.target.files[0], setPostImage, setProgress)} /> <br />

        <div class={styles.form}>
              <input class={styles.input} 
                type="text"
                placeholder='Nome'
                onChange={(event) => setProdutoNome(event.target.value)}
                value={produtoNome}
              />
              <span class={styles.inputBorder}></span>
        </div>
        <div class={styles.form}>
              <input class={styles.input} 
                type="text"
                placeholder='Preço'
                onChange={(event) => setProdutoPreco(event.target.value)}
                value={produtoPrece}
              />
              <span class={styles.inputBorder}></span>
        </div>



        <div>

        <textarea className={styles.areaText} type="text" name="text" class="input" placeholder="Descriçao"
              onChange={(event) => setProdutoDescri(event.target.value)}
              value={produtoDescri}
        />
        </div>
          

        <ThemeProvider theme={theme}>
            <div style={{display:"flex", justifyContent:"center",}}>
              <Button variant="outlined"  size="medium" color='primary' sx = {{bgcolor: "#FD7E05"}} onClick={sendProduto}>
                <span className={styles.btnPost}>
                  postar
                </span>
              </Button>
            </div>
        </ThemeProvider>
         
        </div>
      </div>
        <div>
          <MostrarPreview />
        </div>






      
    </div>



  );
};

export default ColocarProduto;
