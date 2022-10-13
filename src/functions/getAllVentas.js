import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default async function getAllVentas() {
  const ventas = [];
  const collectionRef = collection(db, "ventas");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    ventas.push(doc.data());
  });
  return ventas;
}
