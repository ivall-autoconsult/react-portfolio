import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import Education from './components/Pages/Education';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Sidebar/>
      </div>

      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/education" component={Education}/>
      </Switch>

    </BrowserRouter>

  );
}

export default App;
