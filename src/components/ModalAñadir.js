import React, { useState } from 'react';
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import añadirProducto from "../functions/añadirProducto";

function ModalAñadir({
  isModalAñadir,
  setIsModalAñadir,
  actualizarEstadoProductos,
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



  function añadirProductoModal() {
    //obtener infor del formulario
    const titulo = document.getElementById("titulo").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const sku = document.getElementById("sku").value;
    // enviar informacion a firebase
    const infoProducto = { titulo, precio, cantidad, sku };
    añadirProducto(infoProducto, usuario);
    // cerrar modal
    actualizarEstadoProductos();
    setIsModalAñadir(false);
  }

  return (
    
    <Modal className="layout-sidebar2" show={isModalAñadir} onHide={() => setIsModalAñadir(false)} >
      <div className='card2'>
        <Modal.Title>Añadir producto</Modal.Title>
      </div>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
              id="titulo"
              placeholder="Nombre del producto"
              type="text"
              className="card3"
              required
              maxLength={30}
              onChange={handleNombres}
              value={nombres.valor}
              helperText={nombres.error}
            />
            <Form.Control
              id="precio"
              placeholder="Precio"
              type="text"
              className="card3"
              required
              maxLength={5}
              onChange={handlePrecios}
              value={precios.valor}
              helperText={precios.error}
            />
            <Form.Control
              id="cantidad"
              placeholder="Cantidad"
              type="text"
              className="card3"
              required
              maxLength={5}
              onChange={handleCantidades}
              value={cantidades.valor}
              helperText={cantidades.error}
            />
            <Form.Control
              id="sku"
              placeholder="SKU"
              type="text"
              className="card3"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalAñadir(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={añadirProductoModal}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  
  );
}

export default ModalAñadir;
