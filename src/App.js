import './sass/App.css';
import Hero from './pages/Hero';
import Keune from './pages/Keune';
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
    </section>
  );
}

export default App;