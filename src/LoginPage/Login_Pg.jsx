import "./../../css/style.css"
import { useState } from "react";
import { emailValidator, passwordValidator } from '../function';
import { NavLink } from "react-router-dom";
const LoginPg = ({log,msg,errMsg,setData}) =>{
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleSignup = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
    };

  const[email,setEmail] = useState(false);
  const[password,setPassword] = useState(false);
  const login = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        const data = await response.json();
        setData(data);
        log(true);
      } else {
        if (response.status === 400) {
          errMsg('Usuario não cadastrado');
        }
        if (response.status === 401) {
          errMsg('Email ou senha incorreto');
        }
      }
    } catch (error) {
     console.error(error);
    }
  };
  

return(
<div className="login__pg">
 
 <div className="login__pg-back u-center">
  
  <h2 className="secondary__header secondary__header-login">Login</h2>
    
    <div class="form__pg-login"> 
        {!formData.email ? <p className="form__pg-type">Digite seu email</p> : ''}
        {!email && formData.email ? <p className="form__pg-type form__pg-type-wrong">Informe um email valido</p> : ''}
        <input type="text" 
        placeholder="Email"
        name='email'
        className="form__pg-input" 
        required
        autocomplete="off"
        onChange={(e) => emailValidator(e, setEmail)}
        onBlur={(e) => {handleSignup(e)}}/>
     </div>

    <div class="form__pg-login">
        {!formData.password ? <p className="form__pg-type">Digite sua senha</p> : ''}
        {!password && formData.password ? <p className="form__pg-type form__pg-type-wrong">Senha com menos de 8 caracter</p> : ''}
      <input type="password" 
        placeholder="Senha"
        class="form__pg-input" 
        name='password'
        required
        autocomplete="off"
        onChange={(e) => {passwordValidator(e,setPassword);}}
        onBlur={(e) => {handleSignup(e)}}/>

        <div className="form__pg-nav">
        <NavLink to='/cadastro' className="btn form__pg-singup">Registrar</NavLink>
        <a href="#" className="btn form__pg-forgot">Esqueci a senha</a>
        </div>

    </div>
      <div className="">
        <p className="form__pg-type-error">{msg}</p>
      </div>

        <div className="">
        <button onClick={login} className="btn form__pg-btn">Entrar</button>
        </div>

    </div>
  </div>
  );
};

export default LoginPg;