import { useReducer } from 'react';
import './modal.css';

import { createPortal } from 'react-dom';
import Carrito from '../../stores/carrito';

function Modal(props) {

  const [state, dispatch] = useReducer(Carrito, {})


  return createPortal(
    <section className='modal' onClick={() => props.close()}>
      <section>
        <div></div>
        <div></div>
      </section>
    </section>,
    document.getElementById("portal")
  )
}


export default Modal;