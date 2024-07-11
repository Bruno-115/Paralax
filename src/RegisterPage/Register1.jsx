
import {React, useState } from 'react';
import { nameValidator } from '../function';
import { emailValidator } from '../function';
import { passwordValidator } from '../function';
import { equalValidator } from '../function';
const Register1 = ({setVal2,setVal1,formData}) => {
const [name,SetName] = useState(false);
const [email,SetEmail] = useState(false)
const [validatorPassword,SetValidatorPassword] = useState(false);
const [validatorConfirmPassword,SetValidatorConfirmPassword] = useState(false);
const [password,SetPassword] = useState();

const validator = () => {
  if (name && email && validatorPassword && validatorConfirmPassword) {
    setVal2(true)
    setVal1(true)
  }
}
return(
  <>
    <input type="text" 
      placeholder="Nome completo"
      name="name"
      className={`form__cadastro-input ${!name ? 'form__cadastro-input-wrong': 'form__cadastro-input-accept'}`}
      id="FormId__Name"
      autocomplete="off"
      required
      onChange={(e) => nameValidator(e, SetName)}
      onBlur={!name ? '' : (e) => formData(e)}
    />
    
    <input  type="email"
      className={`form__cadastro-input ${!email ? 'form__cadastro-input-wrong': 'form__cadastro-input-accept'}`}
      placeholder="e-Mail"
      name ="email"
      id="FormId__eMail"
      required
      autocomplete="off"
      onChange={(e) => emailValidator(e, SetEmail)}
      onBlur={!email ? '' : (e) => formData(e)}
      />
    
    <input type="password" placeholder="Senha"
      className={`form__cadastro-input ${!validatorPassword ? 'form__cadastro-input-wrong': 'form__cadastro-input-accept'}`}
      id="FormId__Passowrd"
      name = "password"
      required
      autocomplete="off"
      onChange={(e) => {
        passwordValidator(e, SetValidatorPassword);
        SetPassword(e.target.value);}}
        onBlur={!password ? '' : (e) => formData(e)}
      />

      <label class="form__cadastro-input-CheckBox_Text">{!validatorPassword ? 'Senha deve conter 8 caracteres' : ''}</label>
      
      <input
        type="password"
        placeholder="Confirmar senha"
        className={`form__cadastro-input ${!validatorConfirmPassword ? 'form__cadastro-input-wrong' : 'form__cadastro-input-accept'}`}
        name='confPassword'
        id="FormId__PassowordCheck"
        required
        autoComplete="off"
        onChange={(e) => {equalValidator(e, SetValidatorConfirmPassword, password);}
        }
        />

     <label class="form__cadastro-input-CheckBox_Text">{!validatorConfirmPassword ? 'Senha devem ser iguais ' : ''}</label>

     <navLink onClick={validator} class="btn form__btn">Proximo</navLink>
  </>
  
    );
}

export default Register1;

