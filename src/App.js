import './App.css';
import React, { useEffect, useState } from "react";
import { Navigation } from "./components/navigation";

function App() {
  const [scroll, setScroll] = useState(0);



  useEffect(() => {
    let progressBarHandler = () => {

      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    }
    window.addEventListener("scroll", progressBarHandler);
    return () => window.removeEventListener("scroll", progressBarHandler);

  });

  return (
    <div className="App">

      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

      {/*<Initials />*/}

      <Navigation />

      <div id="progressBarContainer" className="fixed z-10 bg-white bg-opacity-5 w-full top-0 left-0 h-[10px] my-12">
        {/*<div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />*/}
        <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: 1}} />
      </div>


      <div className="flex h-screen bg-white p-10 items-center justify-center">
        <img src="../bitmoji/internet.png" width="25%" />
      </div>

      <div className="flex h-screen bg-[#fbfbfd] p-10 items-center justify-center">
        <img src="../bitmoji/questions.png" width="25%" />

        <div>
          <img src="https://ghchart.rshah.org/pauldevnull" alt="/" />
        </div>
      </div>

      <div className="flex h-screen bg-white p-10 items-center justify-center">
        <img src="../bitmoji/reading.png" width="25%" />
      </div>

      <div className="flex h-screen bg-black p-10 items-center justify-center">
        <img src="../bitmoji/surfing-keyboard.png" width="25%" />
      </div>
      <div className="flex h-screen bg-white p-10 items-center justify-center">
        <img src="../bitmoji/thinking.png" width="25%" />
      </div>
      <div className="flex h-screen bg-black p-10 items-center justify-center">
        <img src="../bitmoji/thoughts.png" width="25%" />
      </div>
      <div className="flex h-screen bg-white p-10 items-center justify-center">
        <img src="../bitmoji/typing.png" width="25%" />
      </div>
    </div>
  );
}

export default App;
