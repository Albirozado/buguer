import React, { useState, useLayoutEffect } from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from "../StylesSheets/LayoutStyles.module.css"
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(){

    const [isOpen, setIsOpen] = useState(true);
    const style = {
      color: "#FD7E05",
      fontWeight: "600"
  }
  
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
  
    useLayoutEffect(() => {
      handleResize(); // Verifica a largura da janela ao montar o componente
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleOpenClick = () => {
      setIsOpen(!isOpen);
    };
    const CellLular = () =>{
      if (window.innerWidth <= 600) {
        setIsOpen(false)
      }
  
  
    }
    return(

<section className='navBar'>

<nav className='navegacao'>
  <div className="logoTipo">
  <Link to="/" className={`uppercase font-bold text-xl ${styles.logoWord}`}>fast<span className={styles.admin}>food</span></Link>

  </div>
  <div className="LinkList" style={{ display: isOpen ? 'block' : 'none' }}>
    <NavLink to="/" className={styles.link}
      end            
      style={({isActive})=> isActive ? style : null}
      onClick={CellLular}


      >Home</NavLink>

      <NavLink to="/cardapio" className={styles.link}
      style={({isActive})=> isActive ? style : null}
      onClick={CellLular}


      >Cardapio</NavLink>

     </div>
  <div className="open" onClick={handleOpenClick}>
    <MenuIcon style={{ fontSize: 28 }} className="iconMenu"/ >
  </div>
</nav>
</section>
    )
}