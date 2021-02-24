
import './App.css';
import Homepage from './pages/homepage/homepage';
import Header from './components/header/header';
import { Switch, Route } from 'react-router-dom'
import Projects from './pages/projects/projects';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1 className='App-name'>Johnathan Lugo</h1>
        <p>
          Computer Science | Orlando, FL
        </p>
      </header> */}
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/about'/>
      </Switch>
    </div>
  );
}

export default App;
