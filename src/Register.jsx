import React, { useState } from 'react';
import "../css/style.css";
import Register1 from "./RegisterPage/Register1";
import Register2 from "./RegisterPage/Register2";
import Register3 from "./RegisterPage/Register3";

const Register = () => {
  const [val1, setVal1] = useState(false);
  const [val2, setVal2] = useState(false);
  const [val3, setVal3] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cep: '',
    num: '',
    adress: '',
    plus: '',
    cpf:'',
    birth: '',
    cellNum: '',
  });

  const submit = async (e) => {
    e.preventDefault();
      fetch('http://localhost:3000/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
  };
  
  
    
  const handleSignup = (e) => {
  setFormData({...formData,[e.target.name]: e.target.value})
  };
  console.log(formData);
  return (
    <div className="form">
      <h1 className="form__Title">Registrar</h1>
      <div className="form__cadastro">
        {!val1 ? <Register1 setVal2={setVal2} setVal1={setVal1} formData={handleSignup} /> : null}
        {val2 ? <Register2 setVal3={setVal3} setVal2={setVal2} formData={handleSignup} /> : null}
        {val3 ? <Register3 setVal1={setVal1} setVal3={setVal3} formData={handleSignup} submit={submit} /> : null}
      </div>
    </div>
  );
};

export default Register;