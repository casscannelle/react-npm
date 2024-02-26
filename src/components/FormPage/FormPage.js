import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [inputValue, setInputValue] = useState({ nome: '', email: '', gatos: 'sim', quantos: '' });
  const [errors, setErrors] = useState({});
  const [responses, setResponses] = useState([]);
  
  const navigate = useNavigate();
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {

      const newResponse = { ...inputValue, timestamp: new Date() };
      setResponses((prevResponses) => [newResponse, ...prevResponses]);

      navigate('/answers', { answers: inputValue });
    } else {
      setErrors(validationErrors);
    }
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
            
    return errors;
  };

  useEffect(() => {
    setErrors({});
  }, [inputValue]);

 

  console.log('Dados do formulário antes de navegar:', inputValue);


  return (
    <div className='container-wrapper'>
      <div className='container-form'>
        <form>
          <h1 className='form_h1'>Adote um gatinho</h1>
          <label>Nome:</label>
          <input className='form_input' type="text" name="nome" value={inputValue.nome} onChange={handleChange} />
          {errors.nome && <p className="error-message">{errors.nome}</p>}
          <br/>
          <label>E-mail:</label>
          <input className='form_input' type="email" name="email" value={inputValue.email} onChange={handleChange} />
          {errors.email && <p className="error-message">{errors.email}</p>}
          <br/>
          <label>Já tem gatos?</label>
          <div>
            <input type='radio' name="gatos" value="sim" id="sim" checked={inputValue.gatos === "sim"} onChange={handleChange} />
            <label htmlFor="sim">Sim</label>
          </div>
          <div>
            <input type='radio' name="gatos" value="nao" id="nao" checked={inputValue.gatos === "nao"} onChange={handleChange} />
            <label htmlFor="nao">Não</label>
          </div>
          <br/>
          <label>Quantos?</label>
          <input className='form_input' type="number" name="quantos" value={inputValue.quantos} onChange={handleChange} min="0" />
          <br/>
          <button className='btn' type="button" onClick={handleSubmit}>Enviar</button>
          
        </form>
      </div>
    </div>
  );
};

export default FormPage;
