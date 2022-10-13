import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import escribirLog from "./escribirLog";

function añadirCliente(infoCliente, autor) {
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "clientes");
  const docRef = doc(collectionRef, infoCliente.id_cli);
  setDoc(docRef, infoCliente);

  escribirLog("Edición", infoCliente, autor);
}

export default añadirCliente;
