import React, {useEffect, lazy, Suspense } from 'react';
import styles from "../StylesSheets/HomePageStyles.module.css"
import Button from '@mui/material/Button';
import {capitalize, createTheme, ThemeProvider } from '@mui/material';
import imagemGirl from "../utilizaveis/woman-g.png"
import ScrollReveal from 'scrollreveal'
import { useNavigate } from 'react-router-dom';

const Cardapio = lazy(() => import("./Cadapios"));






export default function HomeFoGood(){
    useEffect(() => {
        const sr = ScrollReveal();
    
        sr.reveal('#elemento', {
          duration: 1000,
          distance: '80px',
          origin: 'top',
          
        });
      }, []);
      const navigate  = useNavigate()


    const theme = createTheme({
        palette:{
          primary:{
                main: "#e44847"
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
    return(
        <section className={styles.homeMao}>
            <section className={styles.fundoPerso}>
                <section className={styles.sectionHome}>
                    <div className={styles.contenteHome}>
                        <div className={styles.texto}>
                            <h1><span className={styles.melhores}>Melhores Hambúrgueres</span>  da cidade. Suculentos e irresistíveis so na <span className={styles.fast}>fast</span>!</h1>
                            <div className={styles.HomeDescri}>
                                <p>Aqui, cada mordida é uma explosão de sabores e uma experiência memorável.</p>
                            </div>
                            <div className={styles.btnHome}>
                            <ThemeProvider theme={theme}>
                            <Button variant="outlined"  size="small" onClick={()=>navigate(`/cardapio`)}  color='primary' sx = {{bgcolor: "#e44847"}} >
                                <span className={styles.btnPost}>
                                Cardapio
                                </span>
                            </Button>
                            </ThemeProvider>
                            </div>
                        </div>
                    <hr className={styles.hr}/>
                        <div className={styles.imagem} id='elemento'>
                            <img src={imagemGirl} alt="" style={{maxWidth: "100%", width: "35rem",}}/>

                        </div>

                    </div>
                
                </section>
            </section>
            <Suspense fallback={<div style={{ fontSize: "3rem" }}>Loading...</div>}>
                <Cardapio />
              </Suspense>
            </section>


    )
}