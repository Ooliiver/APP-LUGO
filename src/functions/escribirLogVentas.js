import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default function escribirLog(accion, ventas, autor) {
  const collectionRef = collection(db, "logs");
  const docuRef = doc(collectionRef, new Date().toISOString());
  const data = {
    accion,
    fecha: new Date().toISOString(),
    cliente,
    autor,
  };
  setDoc(docuRef, data);
}
