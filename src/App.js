import './App.css';
import React, { useEffect, useState } from "react";
import { Navigation } from "./components/navigation";
import { Github } from "./components/icons";

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

      {/*<div style={{ display: 'flex', background: 'pink' }}>*/}

      <div name="about" style={{ background: 'yellow', height: 'calc(100vw + 10rem)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/*<div name="about" style={{ background: 'yellow', height: 'calc(100vw + 3rem)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>*/}
        <div style={{ display: 'flex', background: 'green', padding: '30px 0 30px 0' }}>
          <img src="../bitmoji/hello.png" alt="/" width="50%" style={{  background: 'orange'}} />

          <div style={{ background: 'pink', width: '100%', marginLeft: "-14%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '2em' }}>HELLO, I'M PAUL</h1>
            <div>
              I'm a full-stack software engineer with over 10 years of professional experience in web development.
              I love to code and am always learning new technologies in the ever-evolving world of development.
            </div>
          </div>
        </div>
      </div>



      <div name="experience" style={{ background: 'lightgrey', height: 'calc(100vw + 10rem)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', background: 'green', padding: '30px 0 30px 0' }}>
          <div style={{ background: 'pink', width: '100%', marginRight: "-4%", zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '2em' }}>EXPERIENCE</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis volutpat dui, sed malesuada
              leo convallis vel. Quisque vulputate sapien eu finibus gravida. Maecenas cursus, leo eu viverra viverra,
              mi libero commodo elit, ac sagittis sapien neque at velit. Pellentesque eleifend urna eu purus fermentum,
              vel condimentum odio posuere. Nullam aliquet lobortis tellus, eu posuere est sagittis in.
              Vestibulum imperdiet convallis dui, non convallis sem lacinia a. Praesent vitae placerat purus,
              vitae commodo quam. Etiam in metus urna. Quisque interdum sapien sed tincidunt facilisis. Nulla facilisi.
            </div>
          </div>
          <img src="../bitmoji/internet.png" alt="/" width="40%" style={{  background: 'orange'}} />
        </div>
      </div>

        {/*<div name="experience" className="flex h-screen bg-white p-10 items-center justify-center">*/}
        {/*  <img src="../bitmoji/internet.png" alt="/" width="25%" />*/}
        {/*</div>*/}


      <div name="code" style={{ background: 'white', height: 'calc(100vw + 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', background: 'green', padding: '30px 0 30px 0' }}>
          <img src="../bitmoji/surfing-keyboard.png" alt="/" width="40%" />

          <div style={{ background: 'pink', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '2em' }}>CODE</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis volutpat dui, sed malesuada
              leo convallis vel. Quisque vulputate sapien eu finibus gravida. Maecenas cursus, leo eu viverra viverra,
              mi libero commodo elit, ac sagittis sapien neque at velit. Pellentesque eleifend urna eu purus fermentum,
              vel condimentum odio posuere. Nullam aliquet lobortis tellus, eu posuere est sagittis in.
              Vestibulum imperdiet convallis dui, non convallis sem lacinia a. Praesent vitae placerat purus,
              vitae commodo quam. Etiam in metus urna. Quisque interdum sapien sed tincidunt facilisis. Nulla facilisi.
            </div>
          </div>

        </div>
        <a href="https://github.com/pauldevnull" target="_blank" className="w-full hover:bg-blue-200">

        <div style={{ display: 'flex', border: '1px solid black', width: '100%', justifyContent: 'center', alignItems: 'center', paddingLeft: '20px' }}>
            <Github width="100" />
            <img src="https://ghchart.rshah.org/pauldevnull" alt="/" width="100%" style={{ padding: '20px' }} />
        </div>
        </a>
      </div>


        <div name="beliefs" className="flex h-screen bg-white p-10 items-center justify-center">
          <img src="../bitmoji/questions.png" alt="/" width="25%" />
        </div>

        <div name="learning" className="flex h-screen bg-black p-10 items-center justify-center">
          <img src="../bitmoji/reading.png" alt="/" width="25%" />
        </div>
        <div name="contact" className="flex h-screen bg-white p-10 items-center justify-center">
          <img src="../bitmoji/thinking.png" alt="/" width="25%" />
          {/*<img src="../bitmoji/thoughts.png" alt="/" width="25%" />*/}
          {/*<img src="../bitmoji/typing.png" alt="/" width="25%" />*/}
        </div>
    </div>
  );
}

export default App;
