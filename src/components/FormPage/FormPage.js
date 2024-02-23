import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lógica para processar o envio do formulário (pode ser um envio para um servidor, armazenamento local, etc.)

    // Redirecionar para a página de lista de respostas
    navigate.push('/answers');
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            Nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar</button>
        </form>
    </div>
  );
};

export default FormPage;
