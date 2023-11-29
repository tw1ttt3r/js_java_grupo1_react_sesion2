import { Outlet } from 'react-router';
import Navbar from './components/nav/nav';

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Home