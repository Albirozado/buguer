import React from 'react';
import Nexmo from 'nexmo';

const EnviarMensagem = () => {
  const enviarMensagem = () => {
    const nexmo = new Nexmo({
      apiKey: 'SUA_API_KEY',
      apiSecret: 'SEU_API_SECRET',
    });

    const from = 'SEU_NÚMERO_DO_NEXMO';
    const to = 'NÚMERO_DESTINO';
    const text = 'Olá, isso é uma mensagem de teste do Nexmo!';

    nexmo.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        console.log(err);
        alert('Ocorreu um erro ao enviar a mensagem.');
      } else {
        if (responseData.messages[0].status === '0') {
          console.log('Mensagem enviada com sucesso!');
          alert('Mensagem enviada com sucesso!');
        } else {
          console.log(`Ocorreu um erro: ${responseData.messages[0]['error-text']}`);
          alert('Ocorreu um erro ao enviar a mensagem.');
        }
      }
    });
  };

  return (
    <div>
      <h1>Enviar Mensagem</h1>
      <button onClick={enviarMensagem}>Enviar</button>
    </div>
  );
};

export default EnviarMensagem;
