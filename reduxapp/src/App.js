import React from 'react';
import './App.css';
import Todo from './components/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Example  from '../src/components/update';
import Inactive from '../src/components/inactive';

function App() {
  return (
    <div className="App">
      <h1>TODO  LIST</h1>
      <Inactive/>
      <Example/>
      <Todo/>
 

    </div>
  );
}

export default App;
