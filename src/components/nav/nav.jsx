import {Link} from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  return (
    <main>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/carga">
        <p>Carga Información</p>
      </Link>
      <Link to="/acerca">
        <p>Acerca</p>
      </Link>
    </main>
  )
}

export default Navbar