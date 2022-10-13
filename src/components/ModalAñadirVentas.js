import React from 'react';
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { useState } from 'react';
import añadirVentas from '../functions/añadirVentas';


function ModalAñadirVentas({
  isModalAñadirVentas,
  setIsModalAñadirVentas,
  actualizarEstadoVentas,
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
  
      const [telefonos, setTelefonos] = useState("")
      const handleTelefonos = ({ target: { value } }) => {
        if (/^[0-9. ]*$/.test(value.toLowerCase())) {
          if (/^([0-9][0-9]*(.|. |$))*$/.test(value.toLowerCase()))
            setTelefonos({ valor: value, error: ""});
        } else
            setTelefonos({
              ...telefonos,
              error: "SOLO ALFABETICOS"
            })
          }
          
          const [correos, setCorreos] = useState("")
          const handleCorreos = ({ target: { value } }) => {
            if (/^[a-záéíóú. ]*$/.test(value.toLowerCase())) {
              if (/^([a-záéíóú][a-záéíóú]*(.|. |$))*$/.test(value.toLowerCase()))
                setCorreos({ valor: value, error: ""});
            } else
                setCorreos({
                  ...correos,
                  error: "SOLO ALFABETICOS"
                })
              }

              const [direcciones, setDirecciones] = useState("")
              const handleDirecciones = ({ target: { value } }) => {
                if (/^[a-záéíóú. ]*$/.test(value.toLowerCase())) {
                  if (/^([a-záéíóú][a-záéíóú]*(.|. |$))*$/.test(value.toLowerCase()))
                    setDirecciones({ valor: value, error: ""});
                } else
                    setDirecciones({
                      ...direcciones,
                      error: "SOLO ALFABETICOS"
                    })
                  }


  function añadirVentasModal() {
    //obtener infor del formulario
    const id_ven = document.getElementById("id_ven").value;
    const total = document.getElementById("total").value;
    const cantidad = document.getElementById("cantidad").value;
    const fecha = document.getElementById("fecha").value;
    const precio = document.getElementById("precio").value;
    const subtotal = document.getElementById("subtotal").value;
    // enviar informacion a firebase
    const infoVentas = { id_ven, total, cantidad, fecha, precio, subtotal };
    añadirVentas(infoVentas, usuario);
    // cerrar modal
    actualizarEstadoVentas();
    setIsModalAñadirVentas(false);
  }

  return (
  
    <Modal className="layout-sidebar2" show={isModalAñadirVentas} onHide={() => setIsModalAñadirVentas(false)} >
      <div className='card2'>
        <Modal.Title>Añadir venta</Modal.Title>
      </div>
      <Modal.Body>
        <Form>
          <Stack>
    
            <Form.Control
              id="id_ven"
              placeholder="Venta"
              type="text"
              className="card3"
              required
              maxLength={30}
              onChange={handleNombres}
              value={nombres.valor}
              helperText={nombres.error}
            />
            <Form.Control
              id="total"
              placeholder="Total de la venta"
              type="text"
              className="card3"
              required
              maxLength={10}
              onChange={handleTelefonos}
              value={telefonos.valor}
              helperText={telefonos.error}
              
              
            />
            <Form.Control
              id="cantidad"
              placeholder="Cantidad"
              type="text"
              className="card3"
              required
              maxLength={30}
              onChange={handleCorreos}
              value={correos.valor}
              helperText={correos.error}
            />
            <Form.Control
              id="fecha"
              placeholder="Fecha"
              type="text"
              className="card3"
              required
              maxLength={30}
              onChange={handleDirecciones}
              value={direcciones.valor}
              helperText={direcciones.error}
            />
            <Form.Control
              id="precio"
              placeholder="Precio"
              type="text"
              className="card3"
              required
              maxLength={10}
              
            />
            <Form.Control
              id="subtotal"
              placeholder="Subtotal"
              type="text"
              className="card3"
              required
              maxLength={10}
              
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalAñadirVentas(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={añadirVentasModal}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  
  );
}

export default ModalAñadirVentas;
