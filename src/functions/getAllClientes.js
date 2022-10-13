import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default async function getAllClientes() {
  const clientes = [];
  const collectionRef = collection(db, "clientes");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    clientes.push(doc.data());
  });
  return clientes;
}
