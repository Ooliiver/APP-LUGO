// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyCaiXNXP8_sJDTCjMVxjvLdUuoiT4ZEB00",
  authDomain: "fruterialugo-29f84.firebaseapp.com",
  projectId: "fruterialugo-29f84",
  storageBucket: "fruterialugo-29f84.appspot.com",
  messagingSenderId: "82716546320",
  appId: "1:82716546320:web:d6ff1cf4e4614605b7c195",
  measurementId: "G-50C1H23RRQ"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;