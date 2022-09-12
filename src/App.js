import './sass/App.css';
import Hero from './pages/Hero';
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
    </section>
  );
}

export default App;