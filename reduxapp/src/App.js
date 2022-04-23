import React from 'react';
import './App.css';
import Todo from './components/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Example  from '../src/components/update';

function App() {
  return (
    <div className="App">
      <h1>TODO  LIST</h1>
      <Example/>
      <Todo/>
 

    </div>
  );
}

export default App;
