import React from 'react';
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import añadirCliente from '../functions/añadirCliente';
import { useState } from 'react';


function ModalAñadirCliente({
  isModalAñadirClientes,
  setIsModalAñadirClientes,
  actualizarEstadoClientes,
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


  function añadirClienteModal() {
    //obtener infor del formulario
    const id_nom = document.getElementById("id_nom").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;
    const id_cli = document.getElementById("id_cli").value;
    // enviar informacion a firebase
    const infoCliente = { id_nom, telefono, correo, direccion, id_cli };
    añadirCliente(infoCliente, usuario);
    // cerrar modal
    actualizarEstadoClientes();
    setIsModalAñadirClientes(false);
  }

  return (
  
    <Modal className="layout-sidebar2" show={isModalAñadirClientes} onHide={() => setIsModalAñadirClientes(false)} >
      <div className='card2'>
        <Modal.Title>Añadir cliente</Modal.Title>
      </div>
      <Modal.Body>
        <Form>
          <Stack>
    
            <Form.Control
              id="id_nom"
              placeholder="Nombre"
              type="text"
              className="card3"
              required
              maxLength={30}
              onChange={handleNombres}
              value={nombres.valor}
              helperText={nombres.error}
            />
            <Form.Control
              id="telefono"
              placeholder="Telefono 10 digitos"
              type="text"
              className="card3"
              required
              maxLength={10}
              onChange={handleTelefonos}
              value={telefonos.valor}
              helperText={telefonos.error}
              
              
            />
            <Form.Control
              id="correo"
              placeholder="Correo"
              type="text"
              className="card3"
              required
              maxLength={30}
              onChange={handleCorreos}
              value={correos.valor}
              helperText={correos.error}
            />
            <Form.Control
              id="direccion"
              placeholder="Direccion"
              type="text"
              className="card3"
              required
              maxLength={30}
              onChange={handleDirecciones}
              value={direcciones.valor}
              helperText={direcciones.error}
            />
            <Form.Control
              id="id_cli"
              placeholder="Numero de identificacion"
              type="text"
              className="card3"
              required
              maxLength={10}
              onChange={handleTelefonos}
              value={telefonos.valor}
              helperText={telefonos.error}
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalAñadirClientes(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={añadirClienteModal}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  
  );
}

export default ModalAñadirCliente;
