import { fireEvent, render, screen } from '@testing-library/react';
import Card from './Card';
import movies from '../../data/movies.json';

describe("Suite de tes del componente Card", () => {
    test("existe la imagen con un alt text pelicula-3", () => {
        const { id, name, isbn, price, image } = movies[2];
        const props = { src:image , nombre: name ,isbn, precio:price, alt: `pelicula-${id}`};
        render(<Card {...props} />);
        const resultado = screen.getByAltText(`pelicula-${id}`)
        expect(resultado).toBeInTheDocument();
    })

    test("Que el boton agregar este acumulando correctamente", () => {
        const { id, name, isbn, price, image } = movies[2];
        const props = { src:image , nombre: name ,isbn, precio:price, alt: `pelicula-${id}`};
        render(<Card {...props} />);
        const boton = screen.getByText("Agregar")
        fireEvent.click(boton);
        fireEvent.click(boton);
        const texto = screen.getByText("Unidades a comprar: 2")
        expect(resultado).toBeInTheDocument();
    })
})