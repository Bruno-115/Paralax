import {React, useState } from 'react';
import { adressValidator } from '../function';
import { CEPValidator } from '../function';
const Register2 = ({setVal3,setVal2,formData}) => {
  const [CEP,setCEP] = useState(false);
  const [Num,setNum] = useState(false);
  const [Adress,setAdress] = useState(false);

  const validator = () => {
    if (CEP && Num && Adress) {
      setVal3(true)
      setVal2(false)
    }
  }
return(
  <>
      <input type="text"  placeholder="Endereço"
      className={`form__cadastro-input ${!Adress ? 'form__cadastro-input-wrong': 'form__cadastro-input-accept'}`}
      id="FormId__Adress"
      required
      name='adress'
      autocomplete="off"
      onChange={(e) => adressValidator(e, setAdress)}
      onBlur={!Adress ? '' : (e) => formData(e)}
      />
    
      <input type="text"  placeholder="Complemento"
      className="form__cadastro-input form__cadastro-input-accept"
      id="FormId__info-adress"
      autocomplete="off"
      name='plus'
      onBlur={(e) => formData(e)}/>

      <input type="text"  placeholder="CEP"
      className={`form__cadastro-input ${!CEP ? 'form__cadastro-input-wrong': 'form__cadastro-input-accept'}`}
      id="cep"
      required
      name='cep'
      maxlength="9"
      onkeyup="cep_completion()"
      autocomplete="off"
      onChange={(e) => CEPValidator(e, setCEP,)}
      onBlur={!CEP ? '' : (e) => formData(e)}
      />


      <input type="number" placeholder="Nº "
       className={`form__cadastro-input ${!Num ? 'form__cadastro-input-wrong': 'form__cadastro-input-accept'}`}
      id="number-adress"
      required
      minlength="1"
      name='num'
      maxlength="7"
      autocomplete="off"
      onChange={(e) => {
        const value = e.target.value
        if (value === '') {
          setNum(false);
        } else {
          setNum(true);
        }
      }}
      onBlur={!Num ? '' : (e) => formData(e)}
     />

      <navLink onClick={validator} class="btn form__btn">Proximo</navLink>
  </>
    );
}


export default Register2;