import './App.css';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';

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
