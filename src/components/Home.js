import React, {useState, useEffect} from "react";
import signOut from "../functions/cerrarSesion";
import { Container, Stack, Form, Table } from "react-bootstrap";
import { Button } from "primereact/button/button.cjs";
import getAllProducts from "../functions/getAllProducts";
import eliminarProductoHome from "../functions/eliminarProductoHome";
import filtrarDatos from "../functions/filtrarDatos";

import {InputText} from 'primereact/inputtext';
import { Chart } from "primereact/chart";

//modales
import ModalAñadir from "./ModalAñadir";
import ModalEditar from "./ModalEditar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { map } from "@firebase/util";

export function Home({ usuario }) {
  const [value1, setValue1] = useState('');
  const [productos, setProductos] = React.useState([]);
  const [isModalAñadir, setIsModalAñadir] = React.useState(false);
  const [isModalEditar, setIsModalEditar] = React.useState(false);
  const [productoEditar, setProductoEditar] = React.useState(null);

  


  async function busquedaFormHandler(e) {
    e.preventDefault();
    const busqueda = e.target.busqueda.value;
    const nvosDocus = await filtrarDatos(busqueda);
    setProductos(nvosDocus);
  }

  function actualizarEstadoProductos() {
    getAllProducts().then((productos) => {
      setProductos(productos);
    });
  }

  function añadirProductoHome() {
    setIsModalAñadir(true);
  }

  React.useEffect(() => {
    actualizarEstadoProductos();
  }, []);

  return (
    <Container fluid>
      
      <ModalAñadir
        isModalAñadir={isModalAñadir}
        setIsModalAñadir={setIsModalAñadir}
        actualizarEstadoProductos={actualizarEstadoProductos}
        usuario={usuario}
      />
      {productoEditar && (
        <ModalEditar
          isModalEditar={isModalEditar}
          setIsModalEditar={setIsModalEditar}
          actualizarEstadoProductos={actualizarEstadoProductos}
          productoEditar={productoEditar}
          setProductoEditar={setProductoEditar}
          usuario={usuario}
        />
      )}

  <div className="card" >
    <h5>Sección de productos</h5>
    <div className="col-12 md:col-6">
      <div className="p-inputgroup">
          <Button label="Search"onClick={
              actualizarEstadoProductos()}/>
            <InputText placeholder="Keyword" />
           </div>
     </div>
  </div>
      <tbody>
      
      <div className="grid">
        <div className="flex justify-content-between mb-3">
          <div className="card">
         
          
              <tr>
                
              <DataTable value={productos}  >
        
            
              <Column field="titulo" header="Nombre"/>
              <Column field="precio" header="Precio"/>
              <Column field="cantidad" header="Cantidad"/>
              <Column field="sku" header="SKU"/>
              
                </DataTable>
              </tr>
        
         </div>
        
          <div className="card">
            <div className="card2">Acciones</div>
          {productos &&
            productos.map((producto, index) => (
              <tr>
                <td>
                  <Button className="card2" label="Editar" icon="pi pi-user-edit"
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...producto });
                      setIsModalEditar(true);
                    }}
                  />ㅤ
                  <Button className="card2" icon="pi pi-trash"  
                    variant="danger"
                    onClick={() => {
                      eliminarProductoHome(producto, usuario).then(
                        (confirmacion) => {
                          actualizarEstadoProductos();
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
        
  
  

      
      <Button className="card2" onClick={añadirProductoHome}> Añadir Producto</Button>
    </Container>
  );
}


