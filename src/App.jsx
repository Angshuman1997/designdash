import "./App.css";
import React from "react";
import { uiData } from "./utils";
import BoxObject from "./BoxObject";

function App() {
  return (
    <div className="App">
      <h1 className="header">DashDesigns</h1>
      <div className="main">
        {Object.keys(uiData).map((key, index) => (
          <div className="card-container" key={`${uiData[key].title}-${index}`}>
            <BoxObject 
              image={uiData[key].image} 
              link={uiData[key].link} 
              title={uiData[key].title} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
