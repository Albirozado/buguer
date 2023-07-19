import React, { useState, useLayoutEffect } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import styles from "../StylesSheets/LayoutStyles.module.css"
import MenuIcon from '@mui/icons-material/Menu';

export default function NavAdmin() {
  const [isOpen, setIsOpen] = useState(true);
  const style = {
    color: "#FD7E05"
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

  return (
    <section className='navBar'>

    <nav className='navegacao'>
      <div className="logoTipo">
      <Link to="/admin" className={`uppercase font-bold text-xl ${styles.logoWord}`}>fast<span className={styles.admin}>admin</span></Link>

      </div>
      <div className="LinkList" style={{ display: isOpen ? 'block' : 'none' }}>
      <NavLink to="/admin" className={styles.link}
          end            
          style={({isActive})=> isActive ? style : null}
          onClick={CellLular}


          >Adicionar</NavLink>
          <NavLink to="/admin/previewadmin" className={styles.link}
          style={({isActive})=> isActive ? style : null}
          onClick={CellLular}


          >Preview</NavLink>
          <NavLink to="/admin/verpedido" className={styles.link}
          style={({isActive})=> isActive ? style : null}
          onClick={CellLular}


         >Pedido</NavLink>  
          <NavLink to="/" className={styles.link}
          onClick={CellLular}


         >Home</NavLink>    
         </div>
      <div className="open" onClick={handleOpenClick}>
        <MenuIcon style={{ fontSize: 28 }} className="iconMenu"/ >
      </div>
    </nav>
    </section>
  );
}
