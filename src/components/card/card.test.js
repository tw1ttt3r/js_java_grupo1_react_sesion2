import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Card from './Card';
import movies from '../../data/movies.json';

const { id, name, isbn, price, image } = movies[2];
const props = { src:image , nombre: name ,isbn, precio:price, alt: `pelicula-${id}`};

describe("Suite de tes del componente Card", () => {
    test("existe la imagen con un alt text pelicula-3", () => {
        render(<Card {...props} />);
        const resultado = screen.getByAltText(`pelicula-${id}`)
        expect(resultado).toBeInTheDocument();
    })

    test("Que el boton agregar este acumulando correctamente", async () => {
        const {rerender} = render(<Card {...props} />);
        const boton = screen.getByText("Agregar")
        fireEvent.click(boton);
        rerender(<Card {...props} />);
        fireEvent.click(boton);
        rerender(<Card {...props} />);
        const texto = screen.getByText("Unidades a comprar: 2")
        expect(texto).toBeInTheDocument()
    })
})