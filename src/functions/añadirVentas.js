import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import escribirLog from "./escribirLog";

export function añadirVentas(infoVentas, autor) {
  
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "ventas");
  const docRef = doc(collectionRef, infoVentas.id_ven);
  setDoc(docRef, infoVentas);

  escribirLog("Creación", infoVentas, autor);
}

export default añadirVentas;
