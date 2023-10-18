//import './Card.css';
import style from './Card.module.css';

function Card(props) { // objeto const persona = { nombre: "pedro" }   persona.edad  = undefined

    // addEventListener("evento a escuchar", function)
// 
    //const [ conDescuento, setConDescuento ] = useState(props.descuento ? "green" : "beige");

    const handleClickButton = (nombreProducto) => {
    // const handleClickButton = (evt) => {
        alert(`Esta a punto de agregar el siguiente producto: ${nombreProducto}`)
        // evt.stopPropagation()
        // evt.preventDefault()
        // console.log(evt)
    }

    return (   // !   true false
        <section style={{fontSize: "40px"}} className={`${style.container} ${props.descuento !== undefined && props.descuento ? style.descuento : style.normal}`}>
            <div className={style["container-image"]}>
                <img src={props.src} alt={props.alt} />
            </div>
            <div className={style['container-data']}>
                <p className={style['nombre']}>{props.nombre}</p>
                <p className={style['nombre']}>{props.isbn}</p>
                <p className={style['price']}>${props.precio}</p>
            </div>
            <div>
                {/* <button onClick={() => handleClickButton(props.nombre)}>Agregar</button> */}
                <button onClick={() => handleClickButton(props.nombre)}>Agregar</button>
            </div>
        </section>
    )
}

export default Card;