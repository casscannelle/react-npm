import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AnswersPage = () => {
  const location = useLocation();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const passedData = location.state?.answers;
    if (passedData) {
      // Use a unique identifier as the key for each answer
      const uniqueKey = Date.now().toString();
      setAnswers((prevAnswers) => ({ ...prevAnswers, [uniqueKey]: passedData }));
    }
  }, [location.state?.answers]);

  console.log('Dados do formulário depois de navegar:', answers);

  const answersArray = Object.values(answers);

  return (
    <div className='container-wrapper'>
      <div className='container-answer'>
        <h2>Quem já se inscreveu</h2>
        <ul>
          {answersArray.map((answer, index) => (
            <li key={index}>{`Nome: ${answer.nome}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnswersPage;
