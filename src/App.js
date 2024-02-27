import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';

//paginas
import AnswersPage from './components/AnswersPage/AnswersPage';
import FormPage from './components/FormPage/FormPage';
import Home from './components/Home/Home';

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <div>
          <h1>KittyKat 🐈</h1> 
        </div>
        <div>
          <nav>
              <Link to="/">Página Inicial</Link>
              <NavLink to="/form">Cadastre-se</NavLink>
              <NavLink to="/answers">Cadastros</NavLink>
          </nav>
        </div>
      </header>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/answers" element={<AnswersPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
