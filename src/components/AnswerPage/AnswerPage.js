import React from 'react';

const AnswerPage = () => {
  // Lógica para obter a lista de respostas (pode ser obtida de um estado global, armazenamento local, servidor, etc.)
  const respostas = []; // Substitua isso com sua lógica real de obtenção de respostas

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
