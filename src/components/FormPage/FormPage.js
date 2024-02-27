import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage() {
  const [inputValue, setInputValue] = useState({ nome: '', email: '', gatos: 'Sim', quantos: '' });
  const [errors, setErrors] = useState({});
  const [responses, setResponses] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {

      // Limpar o formulário
      setInputValue({ nome: '', email: '', gatos: 'Sim', quantos: '' });
      setErrors({});
      alert('Enviado com sucesso')
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (inputValue.nome.length < 3) {
      errors.nome = 'Por favor, digite um nome válido';
    }
    if (!inputValue.email.includes('@')) {
      errors.email = 'Digite um e-mail válido';
    }

    return errors;
  };

  return (
    <div className='container-wrapper'>
      <div className='container-form'>
        <form>
          <h1 className='form_h1'>Quer adotar? <br/> Preencha seus dados</h1>
          <label>Nome:</label>
          <input className='form_input' type="text" name="nome" value={inputValue.nome} onChange={handleChange} />
          {errors.nome && <p className="error-message">{errors.nome}</p>}

          <label>E-mail:</label>
          <input className='form_input' type="email" name="email" value={inputValue.email} onChange={handleChange} />
          {errors.nome && <p className="error-message">{errors.email}</p>}

          <label>Já possui gatos?</label>
          <div>
            <input type='radio' name="gatos" value="Sim" id="sim" checked={inputValue.gatos === "Sim"} onChange={handleChange} />
            <label htmlFor="sim">Sim</label>
          </div>
          <div>
            <input type='radio' name="gatos" value="Nao" id="nao" checked={inputValue.gatos === "Nao"} onChange={handleChange} />
            <label htmlFor="nao">Não</label>
          </div>
          <div>
            <label>Quantos?</label>
            <input className='form_input' type="number" name="quantos" value={inputValue.quantos} onChange={handleChange} min="0" />
          </div>

          <button className='btn' type="submit" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;