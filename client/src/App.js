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
        <p class='text-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies blandit metus nec faucibus.</p>
        <Board></Board>

      </div>
    </Provider>
  );
}

export default App;
