import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import DetalhesProduto from './DetalhesProduto';



export const SendEmail = () => {
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
  
    return (
        <>
                <form ref={form} >
                <textarea name="message" value={"acabaste de receber um pedido"}/>
                </form>
            <DetalhesProduto
                sendEmail = {sendEmail}
            
            />
        </>

    );
  };

