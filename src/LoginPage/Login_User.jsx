
import "./../../css/style.css";
import Popup from "./PopUp";
import { useState } from "react";
const LoginUser = ({data}) => {
  const [activePopup, setActivePopup] = useState(null);
  const showPopup = (id) => {
    setActivePopup(id);
  };
  const [userId,setUserId] = useState(data.user._id);
 return(
<>
 <div className="LoginInfo">
  <h1 className="Login__Title">Informações da conta</h1>
   <div className="Login__Acc">
    <img src="../../imgs/ufo1.svg" alt="Ufo" className="Login__Img1" />
    <img src="../../imgs/ufo2.svg" alt="Ufo" className="Login__Img2" />
    <div className="Login__Info">
        <div className="Login__Type-Info">
            <p className="Login__Text-Info">Nome:</p>
            <p className="Login__Text-Display">{data.user.name}</p>
        </div>
        <div className="Login__Type-Info">
            <p className="Login__Text-Info">Email:</p>
            <p className="Login__Text-Display">{data.user.email}</p>
            <button onClick={() => showPopup('email')} className="Login__Text-Change">(Alterar Email)</button>
            {activePopup === 'email' && (
                  <Popup props={'Email'} activePopup={setActivePopup} active={activePopup} data={data.user.email} id={userId}/>
            )}
        </div>
        <div className="Login__Type-Info">
            <p className="Login__Text-Info">Senha:</p>
            <p className="Login__Text-Display">**********</p>
            <button onClick={() => showPopup('senha')} className="Login__Text-Change">(Alterar Senha)</button>
            {activePopup === 'senha' && (
                 <Popup props={'Senha'} activePopup={setActivePopup} active={activePopup} data={data.user.password} id={userId}/>
            )}
        </div>
        <div className="Login__Type-Info">
            <p className="Login__Text-Info">Endereço:</p>
            <p className="Login__Text-Display">{data.user.adress}</p>
            <button onClick={() => showPopup('endereço')} className="Login__Text-Change">(Alterar Endereço)</button>
            {activePopup === 'endereço' && (
                <Popup props={'Endereço'} activePopup={setActivePopup} active={activePopup} data={data.user.adress} id={userId}/>
            )}
        </div>
        <div className="Login__Type-Info">
            <p className="Login__Text-Info">CEP:</p>
            <p className="Login__Text-Display">{data.user.cep}</p>
            <button onClick={() => showPopup('CEP')} className="Login__Text-Change">(Alterar CEP)</button>
             {activePopup === 'CEP' && (
                <Popup props={'CEP'} activePopup={setActivePopup} active={activePopup} data={data.user.cep} id={userId}/>
             )}
            
        </div>
        <div className="Login__Type-Info">
            <p className="Login__Text-Info">Telefone:</p>
            <p className="Login__Text-Display">{data.user.cellNum}</p>
            <button onClick={() => showPopup('telefone')} className="Login__Text-Change">(Alterar Telefone)</button>
            {activePopup === 'telefone' && (
                <Popup props={'Telefone'} activePopup={setActivePopup} active={activePopup} data={data.user.cellNum} id={userId}/>
            )}
        </div>
     </div>
    </div>
 </div>
 <div className="Login__Plan">
    <h1 className="Login__Plan-MainTitle">Plano assinado</h1>
    <div className="Login__Plan-Display u-margin-bottom-p">
     <h2 className="Login__Plan-Title u-margin-bottom-p">Plano:</h2>
     <h3 className="Login__Plan-Subtitle u-margin-bottom-p">Gamer</h3>
     <p className="Login__Plan-Mega u-margin-bottom-p">70 Megas</p>
     <p className="Login__Plan-Valor u-margin-bottom-p">R$ : 69,00</p>
     <p className="Login__Plan-Atraso u-margin-bottom-p">69 Contas Atrasadas</p>
     <a href="#" className="Login__Plan-Boleto u-margin-bottom-p">Gerar Boleto</a>
    </div>
 </div>
 <div className="Login__Doubt">
    <h1 className="Login__Doubt-Title">Escreva seu comentario</h1>
        <div className="Login__Doubt-Place">
            <input type="text" placeholder='Sobre' className="Login__Doubt-Text" />
            <textarea  placeholder='Descrição' className="Login__Doubt-Description" />
            <button className="Login__Doubt-Send">Enviar</button>    
        </div>
 </div>
</>
    )
}

export default LoginUser;