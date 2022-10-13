import React from "react";

import { Modal, Stack, Form, Button } from "react-bootstrap";

import editarVentas from "../functions/editarVentas"

function ModalEditarVentas({
  isModalEditarVentas,
  setIsModalEditarVentas,
  actualizarEstadoVentas,
  ventasEditar,
  setVentasEditar,
  usuario,
}) {
  function editarVentasModal() {
    //obtener infor del formulario
    const id_ven = document.getElementById("id_ven").value;
    const total = document.getElementById("total").value;
    const cantidad = document.getElementById("cantidad").value;
    const fecha = document.getElementById("fecha").value;
    const precio = document.getElementById("precio").value;
    const subtotal = document.getElementById("subtotal").value;
    // enviar informacion a firebase
    const infoVentas = { id_ven, total, cantidad, fecha, precio, subtotal };
    editarVentas(infoVentas, usuario);
    // cerrar modal
    setVentasEditar(null);
    actualizarEstadoVentas();
    setIsModalEditarVentas(false);
  }

  const [ventasEstado, setVentasEstado] = React.useState({
    ...ventasEditar,
  });

  return (
    <div className="layout-sidebar2" 
     
      show={isModalEditarVentas}
      onHide={() => {
        setIsModalEditarVentas(false);
        setVentasEditar(null);
      }}
    >
      <div className="card2">
      <div className="card2">
        <th>Editar venta</th>
      </div>
      <div>
        
          <tbody>
            <Form.Control
              id="id_nom"
              placeholder="Nombre"
              type="text"
              className="card3"
              value={ventasEstado?.id_nom}
              onChange={(e) =>
                setVentasEstado({
                  ...ventasEstado,
                  id_nom: e.target.value,
                })
              }
            />
            <Form.Control
              id="telefono"
              placeholder="Telefono"
              type="number"
              className="card3"
              value={ventasEstado?.telefono}
              onChange={(e) =>
                setVentasEstado({
                  ...ventasEstado,
                  telefono: e.target.value,
                })
              }
            />
            <Form.Control
              id="correo"
              placeholder="Correo"
              type="text"
              className="card3"
              value={ventasEstado?.correo}
              onChange={(e) =>
                setVentasEstado({
                  ...ventasEstado,
                  correo: e.target.value,
                })
              }
            />
            <Form.Control
              id="direccion"
              placeholder="Direccion"
              type="text"
              className="card3"
              value={ventasEstado?.direccion}
              onChange={(e) =>
                setVentasEstado({
                  ...ventasEstado,
                  direccion: e.target.value,
                })
              }
            />
            <Form.Control
              id="id_cli"
              placeholder="Numero de identificacion"
              type="text"
              className="card3"
              value={ventasEstado?.id_cli}
              onChange={(e) =>
                setVentasEstado({
                  ...ventasEstado,
                  id_cli: e.target.value,
                })
              }
            />
          </tbody>
        
      </div>
      
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditarVentas(false);
            setVentasEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarVentasModal}>
          Editar
        </Button>
        </div>
      </div>

  );
}

export default ModalEditarVentas;
