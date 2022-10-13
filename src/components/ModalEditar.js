import React from "react";
import { useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";

import editarProducto from "../functions/editarProducto";

function ModalEditar({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoProductos,
  productoEditar,
  setProductoEditar,
  usuario,
}) {

  const [nombres, setNombres] = useState("")
  const handleNombres = ({ target: { value } }) => {
    if (/^[a-záéíóú. ]*$/.test(value.toLowerCase())) {
      if (/^([a-záéíóú][a-záéíóú]*(.|. |$))*$/.test(value.toLowerCase()))
        setNombres({ valor: value, error: ""});
    } else
        setNombres({
          ...nombres,
          error: "SOLO ALFABETICOS"
        })
      }
  
      const [precios, setPrecios] = useState("")
      const handlePrecios = ({ target: { value } }) => {
        if (/^[0-9. ]*$/.test(value.toLowerCase())) {
          if (/^([0-9][0-9]*(.|. |$))*$/.test(value.toLowerCase()))
            setPrecios({ valor: value, error: ""});
        } else
            setPrecios({
              ...precios,
              error: "SOLO ALFABETICOS"
            })
          }
          const [cantidades, setCantidades] = useState("")
          const handleCantidades = ({ target: { value } }) => {
            if (/^[0-9. ]*$/.test(value.toLowerCase())) {
              if (/^([0-9][0-9]*(.|. |$))*$/.test(value.toLowerCase()))
                setCantidades({ valor: value, error: ""});
            } else
                setCantidades({
                  ...cantidades,
                  error: "SOLO ALFABETICOS"
                })
              }

  function editarProductoModal() {
    //obtener infor del formulario
    const titulo = document.getElementById("titulo").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const sku = document.getElementById("sku").value;
    // enviar informacion a firebase
    const infoProducto = { titulo, precio, cantidad, sku };
    editarProducto(infoProducto, usuario);
    // cerrar modal
    setProductoEditar(null);
    actualizarEstadoProductos();
    setIsModalEditar(false);
  }

  const [productoEstado, setProductoEstado] = React.useState({
    ...productoEditar,
  });

  return (
    <div className="layout-sidebar2"
      show={isModalEditar}
      onHide={() => {
        setIsModalEditar(false);
        setProductoEditar(null);
      }}
    >
      
      <div className="card2">
        <th>Editar producto</th>
      </div>
      <div>
      <tbody>
        
         
            <Form.Control
              id="titulo"
              placeholder="Nombre del producto"
              type="text"
              className="card3"
              value={productoEstado?.titulo}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  titulo: e.target.value,
                })
              }
            />
            <Form.Control
              id="precio"
              placeholder="Precio"
              type="number"
              className="card3"
              value={productoEstado?.precio}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  precio: e.target.value,
                })
              }
            />
            <Form.Control
              id="cantidad"
              placeholder="Cantidad"
              type="number"
              className="card3"
              value={productoEstado?.cantidad}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  cantidad: e.target.value,
                })
              }
            />
            <Form.Control
              id="sku"
              placeholder="SKU"
              type="text"
              className="card3"
              value={productoEstado?.sku}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  sku: e.target.value,
                })
              }
            />
          
        
      </tbody>
      </div>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditar(false);
            setProductoEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarProductoModal}>
          Editar
        </Button>
      </div>
  
  );
}

export default ModalEditar;
