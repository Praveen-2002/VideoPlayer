import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import PlayVideo from './Components/PlayVideo';
import Login from './Components/Login';
import Register from './Components/Register';

export const dataContext = createContext();

function App() {
  var [data, setData] = useState([]);
  var [userName,setUserName] = useState("User")

  return (
    <dataContext.Provider value={{data,setData}}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar userName={userName}/>
          </header>
          <div>
            <Routes>
              <Route exact path="/user/register" element={<Register/>}/>
              <Route exact path="/user/login" element={<Login setUserName={setUserName}/>}/>
              <Route exact path="/" element={<HomePage/>} />
              <Route exact path="/home" element={<HomePage/>}/>
              <Route path="/video/*" element={<PlayVideo/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
