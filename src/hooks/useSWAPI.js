import { useEffect, useState } from "react";

const useSWAPI = (tipo, id = null) => {
    const [infoSWAPI, setInfoSWAPI] = useState(null); // mantiene la información obtenida de la API
    const [ config, setConfig ] = useState({ tipo: null, id: null }) // mantiene la información de la primera invocación de useSWAPI

    // useEffect( () => {
    //     if (tipo !== "") {
    //         obtenInformacion();
    //     }
    // }, [tipo]);

    useEffect(() => {
        setConfig({ tipo: tipo, id: id });
    }, []);

    const obtenInformacion = async () => {
        let url = `https://swapi.dev/api/${tipo}`;
        if (id !== null) {
            url += `/${id}`;
        }
        await fetch(url)
          .then((response) => {
            const res = response.json();
            console.log("response.json", res)
            return res
          }) // procesa la respuesta exitosa
          .then((json) => {
            console.log("response final", json)
            setInfoSWAPI(json);
          })
          .catch((error) => console.log("error", error)); // procesa la respuesta con error
        console.log("ya se ejecuto")
      };

    const navegaEntrePaginas = async (action) => {
        const url = action === 'prev' ? infoSWAPI.previous : infoSWAPI.next
        await fetch(url)
          .then((response) => {
            const res = response.json();
            console.log("response.json", res)
            return res
          }) // procesa la respuesta exitosa
          .then((json) => {
            console.log("response final", json)
            setInfoSWAPI(json);
          })
          .catch((error) => console.log("error", error)); // procesa la respuesta con error
        console.log("ya se ejecuto")
      };

    return {
        info: infoSWAPI,
        inicializa: obtenInformacion,
        navega: navegaEntrePaginas
    }
};

export default useSWAPI;