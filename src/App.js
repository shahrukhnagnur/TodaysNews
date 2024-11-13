import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import { NewsProvider } from './context';


const App = () => {
  return (
    <>
      <NewsProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </NewsProvider>
    </>
  )
}

export default App
