import React from 'react'
import './App.css'
import Login from './Components/Login/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';

const App = () => {
  return (
    <>
    <Router>
      <div id="App">
        <Routes>
          <Route
            exact path="/"
            element={<Login />}
          />
          <Route
            exact path="/register"
            element={<Register/>}
          />
          
        </Routes>

      </div>
    </Router>
    </>
  )
}

export default App