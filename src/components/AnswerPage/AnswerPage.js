import React from 'react';
import { useLocation } from 'react-router-dom';

const AnswerPage = () => {
  const location = useLocation();
  const respostas = location.state?.answers || []; // Obtém as respostas da localização da rota

  return (
    <div>
      <h2>Lista de Respostas</h2>
      <ul>
        {respostas.map((resposta, index) => (
          <li key={index}>{`Nome: ${resposta.nome}, Email: ${resposta.email}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerPage;
