import './index.css';
import bgImage from './assets/images/neon-light-art-dark-night-moonlit-seas-cloud_982322-4461 1.png'
import Nav from './components/Navbar/Nav';
import Login from './components/Login/Login';
import { useState, useEffect } from 'react';
import Reg from './components/Register/Reg';
import Slders from './components/UserGallery/Sliders/Slders';
import User from './components/UserProfile/User';
import { auth } from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';


function App() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [userSlide, setUserSlide] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUserSlide(true);
        setUserProfile(true);
      } else {
        setUser(null);
        setLogin(true);
        setUserSlide(false);
        setUserProfile(false);
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

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
      {!user && (
        <>
          <Login setRegister={setRegister} login={login} setLogin={setLogin} register={register} />
          <Reg register={register} setLogin={setLogin} setRegister={setRegister} login={login} />
        </>
      )}
      {user && (
        <>
          <Slders userSlide={userSlide} />
          <User userProfile={userProfile} setLogin={setLogin} setUserProfile={setUserProfile} setUserSlide={setUserSlide}/>
        </>
      )}
    </div>
  );
}
export default App;
