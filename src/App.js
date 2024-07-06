import './App.css';
import HomePage from './Compolents/HomePage';
import NavBar from './Compolents/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar userName="UserName"/>
        <HomePage/>
      </header>
    </div>
  );
}

export default App;
