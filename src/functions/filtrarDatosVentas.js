import firebaseApp from "../firebase/credenciales";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
const db = getFirestore();

async function filtrarDatosVentas(stringBusqueda) {
  const docusFiltrado = [];

  const collecionRef = collection(db, "ventas");
  const queryTitulo = query(
    collecionRef,
    where("id_nom", "==", stringBusqueda)
  );
  const querySku = query(collecionRef, where("id_ven", "==", stringBusqueda));

  const arraySnapshots = await Promise.all([
    getDocs(queryTitulo),
    getDocs(querySku),
  ]);

  arraySnapshots.forEach((snapshot) => {
    snapshot.forEach((doc) => {
      docusFiltrado.push(doc.data());
    });
  });
  return docusFiltrado;
}

export default filtrarDatosVentas;
