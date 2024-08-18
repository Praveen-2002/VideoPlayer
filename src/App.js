import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import PlayVideo from './Components/PlayVideo';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  var [data, setData] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar userName="UserName" setData={setData}/>
        </header>
        <div>
          <Routes>
            <Route exact path="/user/register" element={<Register/>}/>
            <Route exact path="/user/login" element={<Login/>} />
            <Route exact path="/" element={<HomePage data={data} />} />
            <Route exact path="home" element={<HomePage data={data}/>}/>
            <Route path="video/*" element={<PlayVideo data={data}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
