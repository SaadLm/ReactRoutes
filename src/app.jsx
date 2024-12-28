import {useEffect, useRef, useState} from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import FormTest from './components/FormTest.jsx'
import {BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {Link} from "react-router-dom";
import About from "./pages/About.jsx";
import Slider from "./pages/Slider.jsx";
import Home from "./pages/Home.jsx";

export function App() {

  // const [count, setCount] = useState(0)
  //   const [nom, setNom] = useState('');
  //   const [prenom, setPrenom] = useState('');




    //////////////////   hadi l use effect hiya li kandirou fiha l hooks //////////////////////////////
    // useEffect(() => {
    //     console.log("App monté")
    //     //// return kandirou fiha dakchi li khess ykoun fel unmount    ///////////
    //     }
    //     , [nom,prenom]);




  // const Agregate=()=>{
  //     setCount((count)=>count+1)
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>


        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route path="/about"  element={<About/>}></Route>
                    <Route path="" index  element={<Home/>}></Route>
                    <Route path="components" element={<Outlet/>}>
                        <Route path="slider" element={<Slider/>}></Route>
                        <Route path="addpersonne" element={<Slider/>}></Route>
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>


      {/*<div class="card">*/}
      {/*  /!*<button onClick={() => setCount((count) => count + 1)}>*!/*/}
      {/*  /!*<button onClick={Agregate}>*!/*/}
      {/*  /!*  count is {count}*!/*/}
      {/*  /!*</button>*!/*/}
      {/*      <br/>*/}

      {/*    /!*<input*!/*/}
      {/*    /!*value={nom}*!/*/}
      {/*    /!*onChange={(e)=>{setNom(e.target.value)}}*!/*/}


      {/*  <p>*/}
      {/*    Edit <code>src/app.jsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}

    </>
  )
}
