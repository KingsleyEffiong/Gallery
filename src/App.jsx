import './index.css';
 import bgImage from './assets/images/neon-light-art-dark-night-moonlit-seas-cloud_982322-4461 1.png'
import Nav from './components/Navbar/Nav';
import Login from './components/Login/Login';
import { useState } from 'react';
import Reg from './components/Register/Reg';
import Slders from './components/UserGallery/Sliders/Slders';

function App() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div
      className=""
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
        background:`linear-gradient(to top, rgba(4, 0, 31, 0.5)50%, rgba(4, 0, 31, 0.5)50%), url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      }}
    >
      <Nav />
      <Login setRegister={setRegister} login={login} setLogin={setLogin} register={register}/>
      <Reg register={register} setLogin={setLogin} setRegister={setRegister} login={login}/>
      <Slders />
    </div>
  );
}
export default App;
