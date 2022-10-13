import React, {useState, useEffect} from "react";
import signOut from "../functions/cerrarSesion";
import { Container, Stack, Form, Table } from "react-bootstrap";
import { Button } from "primereact/button/button.cjs";
import getAllClientes from "../functions/getAllClientes";
import eliminarClienteHome from "../functions/eliminarClienteHome";
import filtrarDatos from "../functions/filtrarDatos";

import {InputText} from 'primereact/inputtext';
import { Chart } from "primereact/chart";

//modales
import ModalAñadirCliente from "./ModalAñadirCliente";
import ModalEditarCliente from "./ModalEditarCliente";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { map } from "@firebase/util";
import filtrarDatosClientes from "../functions/filtrarDatosClientes";

export function Clientes({ usuario }) {
  const [value1, setValue1] = useState('');
  const [clientes, setClientes] = React.useState([]);
  const [isModalAñadir, setIsModalAñadirClientes] = React.useState(false);
  const [isModalEditar, setIsModalEditarClientes] = React.useState(false);
  const [clienteEditar, setClienteEditar] = React.useState(null);

  


  async function busquedaFormHandler(e) {
    e.preventDefault();
    const busqueda = e.target.busqueda.value;
    const nvosDocus = await filtrarDatosClientes(busqueda);
    setClientes(nvosDocus);
  }

  function actualizarEstadoClientes() {
    getAllClientes().then((clientes) => {
      setClientes(clientes);
    });
  }

  function añadirClienteHome() {
    setIsModalAñadirClientes(true);
  }

  React.useEffect(() => {
    actualizarEstadoClientes();
  }, []);

  return (
    <Container fluid>
      
      <ModalAñadirCliente
        isModalAñadirClientes={isModalAñadir}
        setIsModalAñadirClientes={setIsModalAñadirClientes}
        actualizarEstadoClientes={actualizarEstadoClientes}
        usuario={usuario}
      />
      {clienteEditar && (
        <ModalEditarCliente
          isModalEditarCliente={isModalEditar}
          setIsModalEditarCliente={setIsModalEditarClientes}
          actualizarEstadoClientes={actualizarEstadoClientes}
          clienteEditar={clienteEditar}
          setClienteEditar={setClienteEditar}
          usuario={usuario}
        />
      )}

<div className="card" >
    <h5>Sección de productos</h5>
    <div className="col-12 md:col-6">
      <div className="p-inputgroup">
          <Button label="Search"onClick={
              actualizarEstadoClientes()}/>
            <InputText placeholder="Keyword" />
           </div>
     </div>
  </div>
      <tbody>
      
      <div className="grid">
                   
             <div className="flex justify-content-between mb-3">
                        <div className="card">
         
          
              <tr>
                
              <DataTable value={clientes}  >
        
              
              <Column field="id_nom" header="Nombre"/>
              <Column field="telefono" header="Teléfono"/>
              <Column field="correo" header="Correo"/>
              <Column field="direccion" header="Dirección"/>
              <Column field="id_cli" header="Identificación"/>
              
                </DataTable>
              </tr>
        
         </div>
        
          <div className="card">
            <div className="card2">Acciones</div>
          {clientes &&
            clientes.map((cliente, index) => (
              <tr>
                <td>
                  <Button className="card2" label="Editar" icon="pi pi-fw pi-user-edit"
                    variant="dark"
                    onClick={() => {
                      setClienteEditar({ ...cliente});
                      setIsModalEditarClientes(true);
                    }}
                  />ㅤ
                  <Button className="card2" icon="pi pi-trash"
                    variant="danger"
                    onClick={() => {
                      eliminarClienteHome(cliente, usuario).then(
                        (confirmacion) => {
                          actualizarEstadoClientes();
                        }
                      );
                    }}
                  />
                
                </td>
              </tr>
            ))}
            
            </div>
          
        </div>
      </div>
     </tbody>
        
  
  

      
      <Button className="card2" onClick={añadirClienteHome}> Añadir Cliente</Button>
    </Container>
  );
}


