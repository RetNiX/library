import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import { useState } from 'react';
import Header from './components/Header';


function App() {
  // eslint-disable-next-line eqeqeq
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>((sessionStorage.getItem("isLoggedIn") == "true") ? true : false);
  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
