import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";
import escribirLog from "./escribirLog";
const db = getFirestore(firebaseApp);

export default async function eliminarVentasHome(ventas, usuario) {
  const coleccionRef = collection(db, "ventas");
  const docuRef = doc(coleccionRef, ventas.id_ven);
  const eliminado = await deleteDoc(docuRef);

  escribirLog("Eliminación", ventas, usuario);

  return eliminado;
}
