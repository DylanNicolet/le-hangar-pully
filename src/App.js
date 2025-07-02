import './sass/App.css';
import Hero from './pages/Hero';
import Keune from './pages/Keune';
import InfoSoin from './pages/InfoSoins';
import Services from './pages/Services';
import LeSalon from './pages/LeSalon';
import Footer from './components/Footer';
import { useDispatch } from "react-redux";
import { updateScreenWidth } from "./redux/webConfigSlice";
import React from 'react';

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    function handleResize(){
      dispatch(updateScreenWidth(window.innerWidth))
    }

    window.addEventListener("resize", handleResize)
  },[])

  return (
    <div className="App">
      <main>
        <h1 className="visually-hidden">Bienvenue chez Le Hangar</h1>
        <Hero />
        <Keune />
        <InfoSoin />
        <Services />
        <LeSalon />
      </main>
      <Footer />
    </div>
  );
}

export default App;