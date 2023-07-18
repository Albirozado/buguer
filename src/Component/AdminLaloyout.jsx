import React, {useState}from 'react';
import { Outlet} from 'react-router-dom';
import styles from "../StylesSheets/LayoutStyles.module.css"
import NavAdmin from './NavAdmin';
export default function AdmminLayout(){


    const [verificar, setVerificar] = useState("luva")
    const letra = "luva"
    const style = {
        color: "#FD7E05"
    }

    
    if(verificar === letra ){

            return(
                <section className={styles.adminLoyout}>
                    <nav>
                        <NavAdmin/>
                    </nav>
                    <main className={styles.main}>
                        <Outlet/> 
                    </main>
                </section>
            ) 
    }else{
        return(
            <>
            <input type="text" 
            onChange={(event) => setVerificar(event.target.value)}
            value={verificar}
            
            />
            
            </>
        )
    }


}