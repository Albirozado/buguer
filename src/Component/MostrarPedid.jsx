import React, {useState, useMemo, useEffect} from 'react';
import { getPedidos, deletePedido } from '../api/FirebaseAPI';
export default function MostrarPedido(){
    const [allPedidos, setAllPedidos] = useState([])
    const [pedidoLoading, setPedidoLoading] = useState(true);
    
    
    useMemo(() => {
        getPedidos(setAllPedidos);
      }, []);
      useEffect(() => {
        if (allPedidos.length > 0) {
          setPedidoLoading(false);
        }
      }, [allPedidos]);

      return (
        <div>
          <h1>Olá, mostra</h1>
          {pedidoLoading ? (
            <div className="loader">
              <h1>Carregando...</h1>
            </div>
          ) : (
            allPedidos.map((pede) => (
              <table key={pede.id}>
              <tr >
                <td>id</td>
                <td>{pede.id}</td>
              </tr>
              <tr>
                <td>Vai Querer</td>
                <td>{pede.nomePedido}</td>
              </tr>
              <tr>
                <td>Nome do Cliente</td>
                <td>{pede.nomeDoCliente}</td>
              </tr>

                <tr>
                <td>preco</td>
                <td>15</td>
              </tr>
              <tr>
                <td>preco</td>
                <td>15</td>
              </tr>
              <tr>
                <td>preco</td>
                <td>15</td>
              </tr>

              <button onClick={() => deletePedido(pede.id)}>Delete</button>

            </table>

            ))
          )}
        </div>
      );
      
      
}