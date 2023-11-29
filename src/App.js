import './App.css';
// import Card from "./components/card/Card";
// import { Barra, ContainerOption, Option } from "./components/barra/Barra"
import { Fragment, useEffect, useReducer, useRef, useState } from "react";
import useSWAPI from './hooks/useSWAPI';
// import movies from "./data/movies.json";
// import descuentos from "./data/descuentos.json";
// import Modal from './components/modal/Modal';
// import Carrito from './stores/carrito';

import Navbar from './components/nav/nav';
import { Outlet } from 'react-router';

function App() {

  console.log("me imprimo");

  // const consumeInfo = async () => {
  //   await fetch('https://swapi.dev/api/people')
  //     .then((response) => {
  //       const res = response.json();
  //       console.log("response.json", res)
  //       return res
  //     }) // procesa la respuesta exitosa
  //     .then((json) => {
  //       console.log("response final", json)
  //       setInfo(json);
  //     })
  //     .catch((error) => console.log("error", error)); // procesa la respuesta con error
  //   console.log("ya se ejecuto")
  // };

  // const nextPage = async (next) => {
  //   await fetch(next)
  //     .then((response) => {
  //       const res = response.json();
  //       console.log("response.json", res)
  //       return res
  //     }) // procesa la respuesta exitosa
  //     .then((json) => {
  //       console.log("response final", json)
  //       setInfo(json);
  //     })
  //     .catch((error) => console.log("error", error)); // procesa la respuesta con error
  //   console.log("ya se ejecuto")
  // };
  
  // const previousPage = async (previous) => {
  //   await fetch(previous)
  //     .then((response) => {
  //       const res = response.json();
  //       console.log("response.json", res)
  //       return res
  //     }) // procesa la respuesta exitosa
  //     .then((json) => {
  //       console.log("response final", json)
  //       setInfo(json);
  //     })
  //     .catch((error) => console.log("error", error)); // procesa la respuesta con error
  //   console.log("ya se ejecuto")
  // };

  const [info, setInfo] = useState(null);
  const data = useSWAPI('people');

  useEffect(() => {
    if (data.info !== null) {
      setInfo(data.info)
    }
  }, [info, data]);

  const setResultados = async () => {
    await data.inicializa();
  }

  // consumeInfo();
  /*
  // hook me va a regresar principalmente propiedades o hasta funciones
  // useState regresa un arreglo [] de 2 posiciones
  // la primera posición es el estado
  // la segunda posición es la función que actualiza el estado
  // useState siempre debe ser inicializado
  // desestructuración: es la creación de variables a partir de una estructura de datos
  // objetos y arreglos
  // spread operator: permite crear o añadir información de una estructura de datos del mismo tipo a otra
  const [peliculas] = useState([...movies]); // peliculas[0] = [], peliculas[1]
  const [todosDescuentos, setTodosDescuentos] = useState([...descuentos]);
  const [textoActualizado, setTextoActualizado] = useState("")
  const [carrito, setCarrito] = useState([]); 
  const [visible, setVisible] = useState(false);
  //let carrito = useRef([]); 
  let texto = useRef(null);

  const descuento = (id) => todosDescuentos.includes(id)

  const agrega = () => {
    setCarrito([...carrito, {}])
    //carrito.current = [...carrito.current, {}];
    console.log("carrito", carrito);
  }

  const imprime = () => setTextoActualizado(texto.current.value)
  const visualiza  = () => {
    dispatch({ type: "inicia_app" })
    setVisible(!visible)
  };
  const [state, dispatch] = useReducer(Carrito, { compras: [] });

  // funciones anonimas
  // setPeliculas()

  useEffect(() => {
    console.log("solo la primera vez")
  }, []); // se ejecuta una solo vez
  useEffect(() => {
    // dispatch({ type: "inicia_app" });
    console.log("solo cuando visible cambie")
  }, [visible]); // lista de pedendendias

  useEffect(() => {
    console.log("state-reducer", state);
  }, [dispatch]);
*/

  return (
    <>
      {/* <Navbar /> */}
      <section>
        {info !== null && info.results !== undefined && info.results.length > 0 && info.results.map( (people) => <div>
          <h3>{people.name}</h3>
        </div>)}
        {
          data !== null && data.info !== null && data.info.previous !== null && <button onClick={() => data.navega('prev')}>Anterior Pagina</button>
        }
        {
          data !== null && data.info !== null && data.info.next !== null && <button onClick={() => data.navega('next')}>Siguiente Pagina</button>
        }
        {
          info === null && <button onClick={setResultados}>Carga informacion</button>
        }
        <Outlet />
        {/* <Barra>
          <ContainerOption>
            <Option onClick={visualiza}>Opcion 1</Option>
            <Option>Opcion 2</Option>
            <Option>Opcion 3</Option>
          </ContainerOption>
        </Barra>
        <div>
          <p> {textoActualizado} </p>
          <input ref={texto} type='text' />
          <button onClick={imprime}>Actualizar</button>
        </div>
        <main className="App">
          { peliculas.map((pelicula, posicion) =>
            <Fragment key={`pelicula-${posicion}`}>
              { descuento(pelicula.id) && <Card src={pelicula.image} alt={`pelicula-${pelicula.id}`} nombre={pelicula.name} isbn={pelicula.isbn} precio={pelicula.price} />}
              { descuento(pelicula.id) && <span>Descuento incluido</span> }
            </Fragment>
            )
          }
          <button onClick={agrega}>Agregar</button>
      </main>
      { visible && <Modal close={visualiza} /> } */}
      </section>
    </>
  );
}

export default App;
