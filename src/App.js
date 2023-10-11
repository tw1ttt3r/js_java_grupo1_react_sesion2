import './App.css';
import Card from "./components/card/Card";
import { useState } from "react";
import movies from "./data/movies.json";

function App() {

  // hook me va a regresar principalmente propiedades o hasta funciones
  // useState regresa un arreglo [] de 2 posiciones
  // la primera posición es el estado
  // la segunda posición es la función que actualiza el estado
  // useState siempre debe ser inicializado
  // desestructuración: es la creación de variables a partir de una estructura de datos
  // objetos y arreglos
  // spread operator: permite crear o añadir información de una estructura de datos del mismo tipo a otra
  const [peliculas, setPeliculas] = useState([...movies]); // peliculas[0] = [], peliculas[1]

  // funciones anonimas
  // setPeliculas()


  return (
    <main className="App">
      <Card src={peliculas[0].image} alt={`pelicula-${peliculas[0].id}`} nombre={peliculas[0].name} isbn={peliculas[0].isbn} precio={peliculas[0].price} />
      <Card src={peliculas[1].image} alt={`pelicula-${peliculas[1].id}`} nombre={peliculas[1].name} isbn={peliculas[1].isbn} precio={peliculas[1].price} />
      <Card src={peliculas[2].image} alt={`pelicula-${peliculas[2].id}`} nombre={peliculas[2].name} isbn={peliculas[2].isbn} precio={peliculas[2].price} />
      <Card src={peliculas[3].image} alt={`pelicula-${peliculas[3].id}`} nombre={peliculas[3].name} isbn={peliculas[3].isbn} precio={peliculas[3].price} />
      <Card src={peliculas[4].image} alt={`pelicula-${peliculas[4].id}`} nombre={peliculas[4].name} isbn={peliculas[4].isbn} precio={peliculas[4].price} />
      <Card src={peliculas[5].image} alt={`pelicula-${peliculas[5].id}`} nombre={peliculas[5].name} isbn={peliculas[5].isbn} precio={peliculas[5].price} />
      <Card src={peliculas[6].image} alt={`pelicula-${peliculas[6].id}`} nombre={peliculas[6].name} isbn={peliculas[6].isbn} precio={peliculas[6].price} />
      <Card src={peliculas[7].image} alt={`pelicula-${peliculas[7].id}`} nombre={peliculas[7].name} isbn={peliculas[7].isbn} precio={peliculas[7].price} />
      <Card src={peliculas[8].image} alt={`pelicula-${peliculas[8].id}`} nombre={peliculas[8].name} isbn={peliculas[8].isbn} precio={peliculas[8].price} />
      <Card src={peliculas[9].image} alt={`pelicula-${peliculas[9].id}`} nombre={peliculas[9].name} isbn={peliculas[9].isbn} precio={peliculas[9].price} />
      <Card src={peliculas[10].image} alt={`pelicula-${peliculas[10].id}`} nombre={peliculas[10].name} isbn={peliculas[10].isbn} precio={peliculas[10].price} />
      <Card src={peliculas[11].image} alt={`pelicula-${peliculas[11].id}`} nombre={peliculas[11].name} isbn={peliculas[11].isbn} precio={peliculas[11].price} />
      <Card src={peliculas[12].image} alt={`pelicula-${peliculas[12].id}`} nombre={peliculas[12].name} isbn={peliculas[12].isbn} precio={peliculas[12].price} />
      <Card src={peliculas[13].image} alt={`pelicula-${peliculas[13].id}`} nombre={peliculas[13].name} isbn={peliculas[13].isbn} precio={peliculas[13].price} />
      <Card src={peliculas[14].image} alt={`pelicula-${peliculas[14].id}`} nombre={peliculas[14].name} isbn={peliculas[14].isbn} precio={peliculas[14].price} />
      <Card src={peliculas[15].image} alt={`pelicula-${peliculas[15].id}`} nombre={peliculas[15].name} isbn={peliculas[15].isbn} precio={peliculas[15].price} />
      <Card src={peliculas[16].image} alt={`pelicula-${peliculas[16].id}`} nombre={peliculas[16].name} isbn={peliculas[16].isbn} precio={peliculas[16].price} />
      <Card src={peliculas[17].image} alt={`pelicula-${peliculas[17].id}`} nombre={peliculas[17].name} isbn={peliculas[17].isbn} precio={peliculas[17].price} />
      <Card src={peliculas[18].image} alt={`pelicula-${peliculas[18].id}`} nombre={peliculas[18].name} isbn={peliculas[18].isbn} precio={peliculas[18].price} />
      <Card src={peliculas[19].image} alt={`pelicula-${peliculas[19].id}`} nombre={peliculas[19].name} isbn={peliculas[19].isbn} precio={peliculas[19].price} />
    </main>
  );
}

export default App;
