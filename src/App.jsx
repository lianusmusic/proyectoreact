import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  const darBienvenida = () => alert("Bienvenida a nuestra Tienda!!");
  let desplegableProductos = () =>alert("quiero un desplegable");

  return (
    <>
    <div className="App">
      <Navbar 
        nombreDeLaTienda="George Garzone" 
        subtitulo="Learning the Triadic Chromatic Approach, and more"
        productos={desplegableProductos}
        darBienvenida={darBienvenida} //entre llaves porque es una funcion JS//
        />
    <p>HOLA MUNDO!</p>    
    </div>
    </>
  );
}

export default App;
