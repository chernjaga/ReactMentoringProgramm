import React from 'react';
import './App.css';
import './App.css';

import {ReactElementResult} from './homeWorkComponents/createElementMethod';
import {ComponentResult} from './homeWorkComponents/componentMethod';
import {PureComponentResult} from './homeWorkComponents/pureComponentMethod';
import {FunctionalComponentResult} from './homeWorkComponents/functionalMethod';

function App() {
  return (
    <div className="App">
        <ReactElementResult/>
        <ComponentResult/>
        <PureComponentResult/>
        <FunctionalComponentResult/>
    </div>
  );
}

export default App;
