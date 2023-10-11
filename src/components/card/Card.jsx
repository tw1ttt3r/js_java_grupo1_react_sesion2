import './Card.css';

function Card(props) { // objeto

    // addEventListener("evento a escuchar", function)
// 

    const handleClickButton = (nombreProducto) => {
    // const handleClickButton = (evt) => {
        alert(`Esta a punto de agregar el siguiente producto: ${nombreProducto}`)
        // evt.stopPropagation()
        // evt.preventDefault()
        // console.log(evt)
    }

    return (
        <section className='container'>
            <div className='container-image'>
                <img src={props.src} alt={props.alt} />
            </div>
            <div className='container-data'>
                <p className='nombre'>{props.nombre}</p>
                <p className='isbn'>{props.isbn}</p>
                <p className='price'>${props.precio}</p>
            </div>
            <div>
                {/* <button onClick={() => handleClickButton(props.nombre)}>Agregar</button> */}
                <button onClick={() => handleClickButton(props.nombre)}>Agregar</button>
            </div>
        </section>
    )
}

export default Card;