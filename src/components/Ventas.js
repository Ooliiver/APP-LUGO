import React, {useState, useEffect} from "react";
import signOut from "../functions/cerrarSesion";
import { Container, Stack, Form, Table } from "react-bootstrap";
import { Button } from "primereact/button/button.cjs";
import getAllVentas from "../functions/getAllVentas";
import eliminarVentasHome from "../functions/eliminarVentasHome";
import filtrarDatos from "../functions/filtrarDatos";

import {InputText} from 'primereact/inputtext';
import { Chart } from "primereact/chart";

//modales
import ModalAñadirVentas from "./ModalAñadirVentas";
import ModalEditarVentas from "./ModalEditarVentas";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { map } from "@firebase/util";
import filtrarDatosVentas from "../functions/filtrarDatosVentas";

export function Ventas({ usuario }) {
  const [value1, setValue1] = useState('');
  const [ventas, setVentas] = React.useState([]);
  const [isModalAñadir, setIsModalAñadirVentas] = React.useState(false);
  const [isModalEditar, setIsModalEditarVentas] = React.useState(false);
  const [ventasEditar, setVentasEditar] = React.useState(null);

  


  async function busquedaFormHandler(e) {
    e.preventDefault();
    const busqueda = e.target.busqueda.value;
    const nvosDocus = await filtrarDatosVentas(busqueda);
    setVentas(nvosDocus);
  }

  function actualizarEstadoVentas() {
    getAllVentas().then((ventas) => {
      setVentas(ventas);
    });
  }

  function añadirVentasHome() {
    setIsModalAñadirVentas(true);
  }

  React.useEffect(() => {
    actualizarEstadoVentas();
  }, []);

  return (
    <Container fluid>
      
      <ModalAñadirVentas
        isModalAñadirVentas={isModalAñadir}
        setIsModalAñadirVentas={setIsModalAñadirVentas}
        actualizarEstadoVentas={actualizarEstadoVentas}
        usuario={usuario}
      />
      {ventasEditar && (
        <ModalEditarVentas
          isModalEditarVentas={isModalEditar}
          setIsModalEditarVentas={setIsModalEditarVentas}
          actualizarEstadoVentas={actualizarEstadoVentas}
          ventasEditar={ventasEditar}
          setVentasEditar={setVentasEditar}
          usuario={usuario}
        />
      )}

<div className="card" >
    <h5>Sección de ventas</h5>
    <div className="col-12 md:col-6">
      <div className="p-inputgroup">
          <Button label="Search"onClick={
              actualizarEstadoVentas()}/>
            <InputText placeholder="Keyword" />
           </div>
     </div>
  </div>
      <tbody>
      
      <div className="grid">
                   
             <div className="flex justify-content-between mb-3">
                        <div className="card">
         
          
              <tr>
                
              <DataTable value={ventas}  >
        
              
              <Column field="id_ventas" header="Id"/>
              <Column field="total" header="Total"/>
              <Column field="cantidad" header="Cantidad"/>
              <Column field="fecha" header="Fecha"/>
              <Column field="precio" header="Precio"/>
              <Column field="subtotal" header="Subtotal"/>

                </DataTable>
              </tr>
        
         </div>
        
          <div className="card">
            <div className="card2">Acciones</div>
          {ventas &&
            ventas.map((ventas, index) => (
              <tr>
                <td>
                  <Button className="card2" label="Editar" icon="pi pi-fw pi-user-edit"
                    variant="dark"
                    onClick={() => {
                      setVentasEditar({ ...ventas});
                      setIsModalEditarVentas(true);
                    }}
                  />ㅤ
                  <Button className="card2" icon="pi pi-trash"
                    variant="danger"
                    onClick={() => {
                      eliminarVentasHome(ventas, usuario).then(
                        (confirmacion) => {
                          actualizarEstadoVentas();
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
        
  
  

      
      <Button className="card2" onClick={añadirVentasHome}> Añadir Cliente</Button>
    </Container>
  );
}


