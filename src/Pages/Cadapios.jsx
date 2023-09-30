import React, {useEffect, useState} from 'react';
import styles from "../StylesSheets/HomePageStyles.module.css"
import bguerOne from "../utilizaveis/BuguerOne.png"
import bguerThree from "../utilizaveis/BuguerThree.png"
import bguerFo from "../utilizaveis/Buguerfo.png"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal'





export default function Cardapios(){
    const navigate  = useNavigate()
    useEffect(() => {
        const sr = ScrollReveal();
    
        sr.reveal('.bg', {
            duration: 1000,
            distance: '20px',
            origin: 'top',
          
        });
      }, []);

      const real = () =>{
        setAparece(aparece == true)
      }

    return(
        <section className={styles.segundoSectionPrinci}>
            <section className = {styles.segundoSection}>
                <section className={styles.cardapioPrincpipalContainer}>
                    <h1 className={styles.maisPedidos}> mais <span style={{color: "#FD7E05"}}>pedidos</span></h1>
                    <section className={styles.cardapioContainer}>
                        <div className={`bg ${styles.boxCardapio}`}>
                            <div className={styles.imageCardapio}>
                                <img src={bguerOne} alt="" />
                            </div>
                            <div className={styles.textoCardapio}>
                                <div className={styles.tituloPreco}>
                                <h1>Cheeseburger</h1>
                                <span>100MZN</span>
                                </div>
                                <p>Nullam convallis metus at justo iaculis, sit amet gravida velit scelerisque. Mauris vel ligula feugiat.</p>
                                <label onClick={()=>navigate(`/cardapio`)}>pedir agora</label>
                            </div>
                            <FavoriteIcon className={styles.iconPedidos}/>
                            
                        </div>

                        <div className={`bg ${styles.boxCardapio}`}>
                            <div className={styles.imageCardapio}>
                                <img src={bguerThree} alt="" />
                            </div>
                            <div className={styles.textoCardapio}>
                                <div className={styles.tituloPreco}>
                                <h1>Hambúrguer Clássico</h1>
                                <span>150MZN</span>
                                </div>
                                <p>Nullam convallis metus at justo iaculis, sit amet gravida velit scelerisque. Mauris vel ligula feugiat.</p>
                                <label onClick={()=>navigate(`/cardapio`)}>pedir agora</label>

                            </div>
                            <FavoriteIcon className={styles.iconPedidos}/>
                        </div>

                        <div className={`bg ${styles.boxCardapio}`}>
                            <div className={styles.imageCardapio}>
                                <img src={bguerFo} alt="" />
                            </div>
                            <div className={styles.textoCardapio}>
                                <div className={styles.tituloPreco}>
                                <h1>Hambúrguer Vegano</h1>
                                <span>200MZN</span>
                                </div>
                                <p>Nullam convallis metus at justo iaculis, sit amet gravida velit scelerisque. Mauris vel ligula feugiat.</p>
                                <label onClick={()=>navigate(`/cardapio`)}>pedir agora</label>

                            </div>
                            <FavoriteIcon className={styles.iconPedidos}/>
                        </div>
                    </section>
                </section>
            </section>
        
        </section>
    )
}