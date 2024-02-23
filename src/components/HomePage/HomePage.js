import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const HomePage = () => <div>Página Inicial</div>;
const FormPage = () => <div>Cadastre-se</div>;
const AnswerPage = () => <div>Cadastros</div>;

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/form">Cadastre-se</Link></li>
        <li><Link to="/answers">Cadastros</Link></li>
      </ul>
    </nav>

    <Route path="/" exact component={HomePage} />
    <Route path="/form" component={FormPage} />
    <Route path="/answers" component={AnswerPage} />
  </Router>
);

export default App;