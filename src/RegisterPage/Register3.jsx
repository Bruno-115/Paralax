import React, { useState } from 'react';
import { CPFValidator } from '../function';
import { CellValidator } from '../function';
import { NavLink } from 'react-router-dom';

const Register3 = ({ setVal1, setVal3, formData, submit }) => {
  const [CPF, setCPF] = useState(false);
  const [Birth, setBirth] = useState(false);
  const [CellNum, setCellNum] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);

  const validator = () => {
    if (CPF && CellNum && Birth) {
      setSaveInfo(true);
    }
  };

  return (
    <div className="form__cadastro-fix" onChange={validator}>
      <input
        type="text"
        placeholder="CPF"
        id="FormId__CPF"
        className={`form__cadastro-input ${!CPF ? 'form__cadastro-input-wrong' : 'form__cadastro-input-accept'}`}
        maxLength="14"
        minLength="14"
        required
        name="cpf"
        autoComplete="off"
        onChange={(e) => CPFValidator(e, setCPF)}
        onBlur={(e) => formData(e)}
      />

      <input
        type="date"
        placeholder="Data de nascimento"
        id="FormId_Data"
        className={`form__cadastro-input ${!Birth ? 'form__cadastro-input-wrong' : 'form__cadastro-input-accept'}`}
        required
        name="birth"
        autoComplete="off"
        onChange={(e) => {
          const value = e.target.value;
          const currentDate = new Date(value);
          const year = currentDate.getFullYear();
          if (value === '' || year > 2025 || year < 1940) {
            setBirth(false);
          } else {
            setBirth(true);
          }
        }}
        onBlur={(e) => formData(e)}
      />

      <input
        type="text"
        name="cellNum"
        id="FormId_Telefone"
        placeholder="Telefone"
        maxLength="15"
        className={`form__cadastro-input ${!CellNum ? 'form__cadastro-input-wrong' : 'form__cadastro-input-accept'}`}
        required
        autoComplete="off"
        minLength="15"
        onChange={(e) => CellValidator(e, setCellNum)}
        onBlur={(e) => formData(e)}
      />

      <div className="form__cadastro-CheckBox">
        <div className="form__cadastro-CheckBoxSpace">
          <input
            type="checkbox"
            id="FormId_CheckBox1"
            className="form__cadastro-input-CheckBox"
            required
            autoComplete="off"
          />
          <label className="form__cadastro-input-CheckBox_Text">
            Concordar com a
            <a className="form__cadastro-input__highlight" href="https://www.youtube.com/watch?v=A_HjMIjzyMU">
              Política de segurança
            </a>
          </label>
        </div>

        <div className="form__cadastro-CheckBoxSpace">
          <input
            type="checkbox"
            id="FormId_CheckBox2"
            className="form__cadastro-input-CheckBox"
            required
            autoComplete="off"
          />
          <label className="form__cadastro-input-CheckBox_Text">Concordo com mais nada</label>
        </div>
      </div>
      {!saveInfo ? <div className="form__btn-wait">Campo em vermelho</div> : ''}
      {saveInfo ? <navLink to="/login" onClick={submit} className="btn form__btn">Próximo</navLink> : ''}
    </div>
  );
};

export default Register3;
