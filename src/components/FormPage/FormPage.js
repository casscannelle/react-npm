import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [inputValue, setInputValue] = useState({ nome: '', email: '', gatos: 'sim', quantos: '' });
  const [errors, setErrors] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);  // Adicione esta linha
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setShowAnswers(true);
      navigate('/answers');
      setInputValue({ nome: '', email: '', gatos: 'sim', quantos: '' }); // Limpar o formulário
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (inputValue.nome.length < 3) {
      errors.nome = 'Por favor, digite seu nome';
    }
    if (!inputValue.email.includes('@')) {
      errors.email = 'Digite um e-mail válido';
    }
    if (!inputValue.gatos) {
      errors.gatos = 'Por favor, indique se tem gatos';
    }
    if (inputValue.quantos.length === 0) {
      errors.quantos = 'Por favor, digite sua quantos';
    }
        
    return errors;
  };

  return (
    <div className='container-wrapper'>
      <div className='container-form'>
        <form onSubmit={handleSubmit}> {/* Adicione onSubmit aqui */}
          <h1 className='form_h1'>Preencha seus dados</h1>
          <label>Nome:</label>
          <input className='form_input' type="text" name="nome" value={inputValue.nome} onChange={handleChange} required />
          {showAnswers || !errors.nome ? null : <p className="error-message">{errors.nome}</p>}
          <br/>
          <label>E-mail:</label>
          <input className='form_input' type="email" name="email" value={inputValue.email} onChange={handleChange} required />
          {showAnswers || !errors.email ? null : <p className="error-message">{errors.email}</p>}
          <br/>
          <label>Gatos?</label>
          <div>
            <input type='radio' name="gatos" value="sim" id="sim" checked={inputValue.gatos === "sim"} onChange={handleChange} />
            <label htmlFor="sim">Sim</label>
          </div>
          <div>
            <input type='radio' name="gatos" value="não" id="não" checked={inputValue.gatos === "não"} onChange={handleChange} />
            <label htmlFor="não">Não</label>
          </div>
          <br/>
          <label>Quantos?</label>
          <input className='form_input' type="number" name="quantos" value={inputValue.quantos} onChange={handleChange} min="0" required />
          {showAnswers || !errors.quantos ? null : <p className="error-message">{errors.quantos}</p>}
          <br/>
          <button type="submit" onClick={handleSubmit}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
