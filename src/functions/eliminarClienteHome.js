import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";
import escribirLog from "./escribirLog";
const db = getFirestore(firebaseApp);

export default async function eliminarClienteHome(clientes, usuario) {
  const coleccionRef = collection(db, "clientes");
  const docuRef = doc(coleccionRef, clientes.id_ven);
  const eliminado = await deleteDoc(docuRef);

  escribirLog("Eliminación", clientes, usuario);

  return eliminado;
}
