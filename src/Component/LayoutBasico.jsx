import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
export  default function LayoutBasico(){
    return(
        <>
        <nav>
            <Header/>
        </nav>
        <main >
            <Outlet/>
        </main>
        
        </>

    )
}