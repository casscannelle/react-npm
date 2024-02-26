import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AnswersPage from './components/AnswersPage/AnswersPage';
import FormPage from './components/FormPage/FormPage';
import Home from './components/Home/Home';

const App = () => (
  <Router>
    <div>
      <header>
        <h1>KittyKat</h1> <h3>Adote um gatinho!</h3>
   
    <div>
      <nav>
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/form">Cadastre-se</Link></li>
        <li><Link to="/answers">Cadastros</Link></li>
      </ul>
      </nav>
    </div>
    </header>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/answers" element={<AnswersPage />} />
    </Routes>
  </Router>
);

export default App;
