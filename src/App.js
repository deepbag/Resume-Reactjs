import React from 'react';
import Intrest from './Intrest';
import Probar from './Probar';
import Projects from './Projects';
import Scolumn from './Scolumn';
import Social from './Social';


function App() {
  return (
  <>
    <div className="container-fluid bg-white"> 
      <div className="row">  
        <div className="col-lg-4 p-3"> 
          <div className="div-color text-center">
            <img src={process.env.PUBLIC_URL + "/img/deep.jpg"} className="img-fluid rounded-circle avatar-img" alt="avatar"/>
          </div>
        </div> 
      
        <div className="col-lg-8 p-3"> 
          <div className="p-3 div-color">
            <h2 className="text-css">Deep Bag</h2>
            <h6 className="text-p">React Developer & Wordpress Developer</h6>
            <hr />
            <h6 className="py-2" style={{overflow: 'auto', lineHeight: '25px'}}><span role="img" aria-label="gun">🔭</span> I’m currently doing Engineering.
            <span role="img" aria-label="Frute">🌱</span> I’m currently learning React/Flutter/PHP.
            <span role="img" aria-label="human">👯</span> I’m looking to Part time job as a freelancer.
            <span role="img" aria-label="chat">💬</span> Ask me about learning React/Flutter/PHP/HTML/Bootstrap.
            <span role="img" aria-label="electric">⚡</span> Fun fact: The usual programmers drink coffee while coding but I coding while listening to the song.
            </h6>
          </div>
        </div> 
      </div> 

      <div className="row">
        <div className="col-lg-4">
          <div className="div-color">
            <Probar />
          </div>
          <div className="div-color">
            <Projects />
          </div>
          <div className="div-color mb-3">
            <Social />
          </div>
          <div className="div-color mb-3 pb-3">
            <Intrest />
          </div>
          
        </div> 

        <div className="col-lg-8">
          <Scolumn />
        </div>

      </div>
    </div>
  </>
  )
}

export default App;
