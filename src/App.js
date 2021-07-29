import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import { createElement } from 'react';

function App() {
  return (
          React.createElement("body", null,
          React.createElement("div", null,
          React.createElement("h1", null, "Recordando react")),
          React.createElement("div", null,
          React.createElement("ul", null, 
          React.createElement("li", null, "Juan"),
          React.createElement("li", null, "Pepe"),
          React.createElement("li", null, "Fabian"))))
    
    
  );
}

function Cuerpo(){

  return (
    React.createElement("div", null,
    React.createElement("ul", null, 
    React.createElement("li", null, "Juan"),
    React.createElement("li", null, "Pepe"),
    React.createElement("li", null, "Fabian")))

  );
}

 //ReactDOM.render(
 //  Cuerpo()
 //)
export default App;
