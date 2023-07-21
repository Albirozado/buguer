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
          {pedidoLoading ? (
              <div className="loaderContent">
                <div className="loader"></div>
              </div>
          ) : (
            allPedidos.map((pede) => (
              <table key={pede.id} >
              <tr >
                <td>id</td>
                <td>{pede.id}</td>
              </tr>
              <tr>
                <td>Nome do Cliente</td>
                <td>{pede.nomeDoCliente}</td>
              </tr>
              <tr>
                <td>Vai Querer</td>
                <td>{pede.nomePedido}</td>
              </tr>
              <tr>
                <td>Quantidade</td>
                <td>{pede.pedidoQuantidade}</td>
              </tr>
                <tr>
                <td>Preço Total</td>
                <td>{pede.valoraApagar}</td>
              </tr>
              <tr>
                <td>Telefone</td>
                <td>{pede.clienteTelefone}</td>
              </tr>
              <tr>
                <td>Forma de Pedido</td>
                <td>{pede.formaDePedido}</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>{pede.horaDoPedido}</td>
              </tr>


              <button onClick={() => deletePedido(pede.id)}>Delete</button>

            </table>

            ))
          )}
        </div>
      );
      
      
}