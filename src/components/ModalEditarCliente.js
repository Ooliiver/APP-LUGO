import React from "react";

import { Modal, Stack, Form, Button } from "react-bootstrap";

import editarCliente from "../functions/editarCliente";

function ModalEditarCliente({
  isModalEditarCliente,
  setIsModalEditarCliente,
  actualizarEstadoClientes,
  clienteEditar,
  setClienteEditar,
  usuario,
}) {
  function editarClienteModal() {
    //obtener infor del formulario
    const id_nom = document.getElementById("id_nom").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;
    const id_cli = document.getElementById("id_cli").value;
    // enviar informacion a firebase
    const infoCliente = { id_nom, telefono, correo, direccion, id_cli };
    editarCliente(infoCliente, usuario);
    // cerrar modal
    setClienteEditar(null);
    actualizarEstadoClientes();
    setIsModalEditarCliente(false);
  }

  const [clienteEstado, setClienteEstado] = React.useState({
    ...clienteEditar,
  });

  return (
    <div className="layout-sidebar2" 
     
      show={isModalEditarCliente}
      onHide={() => {
        setIsModalEditarCliente(false);
        setClienteEditar(null);
      }}
    >
      <div className="card2">
      <div className="card2">
        <th>Editar cliente</th>
      </div>
      <div>
        
          <tbody>
            <Form.Control
              id="id_nom"
              placeholder="Nombre"
              type="text"
              className="card3"
              value={clienteEstado?.id_nom}
              onChange={(e) =>
                setClienteEstado({
                  ...clienteEstado,
                  id_nom: e.target.value,
                })
              }
            />
            <Form.Control
              id="telefono"
              placeholder="Telefono"
              type="number"
              className="card3"
              value={clienteEstado?.telefono}
              onChange={(e) =>
                setClienteEstado({
                  ...clienteEstado,
                  telefono: e.target.value,
                })
              }
            />
            <Form.Control
              id="correo"
              placeholder="Correo"
              type="text"
              className="card3"
              value={clienteEstado?.correo}
              onChange={(e) =>
                setClienteEstado({
                  ...clienteEstado,
                  correo: e.target.value,
                })
              }
            />
            <Form.Control
              id="direccion"
              placeholder="Direccion"
              type="text"
              className="card3"
              value={clienteEstado?.direccion}
              onChange={(e) =>
                setClienteEstado({
                  ...clienteEstado,
                  direccion: e.target.value,
                })
              }
            />
            <Form.Control
              id="id_cli"
              placeholder="Numero de identificacion"
              type="text"
              className="card3"
              value={clienteEstado?.id_cli}
              onChange={(e) =>
                setClienteEstado({
                  ...clienteEstado,
                  id_cli: e.target.value,
                })
              }
            />
          </tbody>
        
      </div>
      
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditarCliente(false);
            setClienteEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarClienteModal}>
          Editar
        </Button>
        </div>
      </div>

  );
}

export default ModalEditarCliente;
