import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Board from './Components/Board'
import { Provider } from 'react-redux';
import store from './flux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar></Navbar>
        <h1 class='title-page'>keyboard switches</h1>
        <p class='text-desc'>The keyboard switch, the part of the keyboard that makes the click and the clack.</p>
        <Board></Board>

      </div>
    </Provider>
  );
}

export default App;
