import "./../../css/style.css"
import { equalValidator,
   emailValidator,
   passwordValidator,
   adressValidator,
   CEPValidator,
   CellValidator } from "../function";
import { useState } from "react";
import bcrypt from 'bcryptjs';

const Popup = ({props,activePopup,active,data,id}) => {
   let dataValue;
   const [newValue,setNewValue] = useState();
   const [oldValue,setOldValue] = useState(false);
   const [textOld,setTextOld] = useState(false);
   const [textNew,setTextNew] = useState(false);
   const [textEqual,setTextEqual] = useState(false);
   const [value,setValue] = useState(false);
   const [confirmValue,setConfirmValue] = useState(false);
   const [save,setSave] = useState(false);

   const saveInfo = () => {
      if(oldValue && value && confirmValue) {
         setSave(true)
      }else{
         setSave(false)
      }
   }
   const update = async () => {
      try {
        if (props) {
          const updateData = {};
          if (props === 'Email') {
            updateData.email = newValue;
          } else if (props === 'Senha') {
            updateData.password = newValue;
          } else if (props === 'Endereço') {
            updateData.adress = newValue;
          } else if (props === 'CEP') {
            updateData.cep = newValue;
          } else if (props === 'Telefone') {
            updateData.cellNum = newValue;
          }
    
          const response = await fetch('http://localhost:3000/api/popup/' + id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
          });
    
          console.log(id);
          console.log(response);
    
          if (response.ok) {
            console.log(`${props} atualizado com sucesso`);
          } else {
            console.log('Falha no update');
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    
return (
<>
 <div className="Popup">
   <button onClick={() => {activePopup(null)}} className="Popup__Close">X</button>
    <div className="Popup__Layout">
    {!textOld ? <p className="Popup__Info">Insira {props} :</p> : ''}
    {!oldValue && textOld ? <p className="Popup__Info Popup__Info-red"> {props} contem valores diferente</p> : ''}
    {oldValue ?  <p className="Popup__Info Popup__Info-green">{props} :</p> : ''}
    <input type="text" className="Popup__NewInfo" 
    onChange={(e) => {dataValue = e.target.value;
      saveInfo();}}
    onBlur={async (e) => {
    setTextOld(true); 
    dataValue = e.target.value;
    if(props === 'Senha') {
      const passwordMatch = await bcrypt.compare(dataValue,data);
      passwordMatch ? setOldValue(true) : setOldValue(false)
    }else{
    dataValue === data ? setOldValue(true) : setOldValue(false)}
    console.log(dataValue)
    console.log(data)
    saveInfo}} />
    
    {!textNew ? <p className="Popup__Info">Insira o novo {props} :</p> : ''}
    {!value && textNew? <p className="Popup__Info Popup__Info-red"> {props} incorreto:</p> : ''}
    {value ? <p className="Popup__Info Popup__Info-green"> Novo(a) {props}:</p> : ''}
    <input type="text" className="Popup__NewInfo" onBlur={() => {setTextNew(true);
    saveInfo
    }} 
    onChange={(e) =>{
      
      if(props === 'Email') emailValidator(e,setValue);
      if(props === 'Senha') passwordValidator(e,setValue);
      if(props === 'Endereço') adressValidator(e,setValue);
      if(props === 'CEP') CEPValidator(e,setValue);
      if(props === 'Telefone') CellValidator(e,setValue);
      setNewValue(e.target.value);
      saveInfo();
    }}/>
    
    {!textEqual ? <p className="Popup__Info">Confirme {props}:</p> : ''}
    {!confirmValue && textEqual? <p className="Popup__Info Popup__Info-red">{props} não são iguais:</p> : ''}
    {confirmValue ? <p className="Popup__Info Popup__Info-green">{props}:</p> : ''}
    <input type="text" className="Popup__NewInfo" onChange={(e) => 
    {equalValidator (e,setConfirmValue,newValue);
      setTextEqual(true);
      saveInfo();}} 
      onBlur={saveInfo}/>
    </div>
   {!save ? <button className="Popup__ConfirmBtn Popup__ConfirmBtn-wrong">Informação faltando ou incorreta</button> : <button onClick={update}className="Popup__ConfirmBtn">Salvar</button>}
  </div>
  <div className={`${active !== null ? 'Popup__BackgroundBlur' : ''}`}/>
</>
);
}

export default Popup;