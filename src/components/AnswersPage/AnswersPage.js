import React from "react";
import { useLocation } from "react-router-dom";

const AnswersPage = () => {
  const location = useLocation();
  const answers = location.state?.answers;

  return (
    <div className="container-wrapper">
      <div className="container-answer">
        <h2>Todas as Respostas</h2>
        {answers ? (
          // Mostrar respostas
          <pre>{JSON.stringify(answers, null, 2)}</pre>
        ) : (
          //Erro se não achar respostas
          <p>Nenhuma resposta encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default AnswersPage;