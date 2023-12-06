import { buscaPelicula, busquedaAvanzada, busquedaPorPrecio} from "./buscaProducto";

describe("Pruebas de la funcionalidad de buscaPelicula", () => {
    test('buscaPelicula es de tipo function', () => {
        expect(typeof buscaPelicula).toBe("function")
    });
    
    // test('valor 4 no sea tipo function', () => {
    //     expect(typeof 4 !== "function").toBe(false)
    // });
    
    test("que la pelicula 'Mi probre angelito' no exista en mi arreglo de peliculas", () => {
        const pelicula = "Mi probre angelito";
        const resultado = buscaPelicula(pelicula); // [?] 1 posicion
        expect(resultado.length === 0).toBe(true)
    })
});
