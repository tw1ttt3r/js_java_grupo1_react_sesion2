import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <h1>Lo sentimos, lo que buscas no lo tenemos</h1>
      <Link to="/"> 
       <p>Home</p>
      </Link>
    </main>
  )
}

export default NotFound