import React from 'react';
import styles from "../StylesSheets/HomePageStyles.module.css"
import bguerOne from "../utilizaveis/BuguerOne.png"
import bguerThree from "../utilizaveis/BuguerThree.png"
import bguerFo from "../utilizaveis/Buguerfo.png"
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function Cardapios(){
    return(
        <>
            <section className = {styles.segundoSection}>
                <section className={styles.cardapioPrincpipalContainer}>
                    <h1 className={styles.maisPedidos}> mais pedidos</h1>
                    <section className={styles.cardapioContainer}>
                        <div className={styles.boxCardapio}>
                            <div className={styles.imageCardapio}>
                                <img src={bguerOne} alt="" />
                            </div>
                            <div className={styles.textoCardapio}>
                                <div className={styles.tituloPreco}>
                                <h1>Cheeseburger</h1>
                                <span>$100</span>
                                </div>
                                <p>Nullam convallis metus at justo iaculis, sit amet gravida velit scelerisque. Mauris vel ligula feugiat.</p>
                                <label>pedir agora</label>
                            </div>
                            <FavoriteIcon className={styles.iconPedidos}/>
                            
                        </div>

                        <div className={styles.boxCardapio}>
                            <div className={styles.imageCardapio}>
                                <img src={bguerThree} alt="" />
                            </div>
                            <div className={styles.textoCardapio}>
                                <div className={styles.tituloPreco}>
                                <h1>Hambúrguer Clássico</h1>
                                <span>$150</span>
                                </div>
                                <p>Nullam convallis metus at justo iaculis, sit amet gravida velit scelerisque. Mauris vel ligula feugiat.</p>
                                <label>pedir agora</label>

                            </div>
                            <FavoriteIcon className={styles.iconPedidos}/>
                        </div>

                        <div className={styles.boxCardapio}>
                            <div className={styles.imageCardapio}>
                                <img src={bguerFo} alt="" />
                            </div>
                            <div className={styles.textoCardapio}>
                                <div className={styles.tituloPreco}>
                                <h1>Hambúrguer Vegano</h1>
                                <span>$200</span>
                                </div>
                                <p>Nullam convallis metus at justo iaculis, sit amet gravida velit scelerisque. Mauris vel ligula feugiat.</p>
                                <label>pedir agora</label>

                            </div>
                            <FavoriteIcon className={styles.iconPedidos}/>
                        </div>
                    </section>
                </section>
            </section>
        
        </>
    )
}