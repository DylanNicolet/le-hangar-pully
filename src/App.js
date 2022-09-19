import './sass/App.css';
import Hero from './pages/Hero';
import Keune from './pages/Keune';
import InfoSoin from './pages/InfoSoins';
import Services from './pages/Services';
import LeSalon from './pages/LeSalon';
import Map from './pages/Map';
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
    <section className="App">
      <Hero />
      <Keune />
      <InfoSoin />
      <Services />
      <LeSalon />
      <Map />
      <Footer />
    </section>
  );
}

export default App;