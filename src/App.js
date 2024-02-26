import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AnswerPage from './components/AnswerPage/AnswerPage';
import FormPage from './components/FormPage/FormPage';
import Home from './components/Home/Home';

const App = () => (
  <Router>
    <div>
      <header>
        <h1>Logo</h1>
   
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
      <Route path="/answers" element={<AnswerPage />} />
    </Routes>
  </Router>
);

export default App;
