
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ProfileScreen from './components/ProfileScreen';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/profile" component={ProfileScreen}/>

      </Switch>
    </div>
  );
}

export default App;
