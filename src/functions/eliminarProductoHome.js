import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";
import escribirLog from "./escribirLog";
const db = getFirestore(firebaseApp);

export default async function eliminarProductoHome(productos, usuario) {
  const coleccionRef = collection(db, "productos");
  const docuRef = doc(coleccionRef, productos.sku);
  const eliminado = await deleteDoc(docuRef);

  escribirLog("Eliminación", productos, usuario);

  return eliminado;
}
