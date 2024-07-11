import LoginPg from "./LoginPage/Login_Pg";
import LoginUser from "./LoginPage/Login_User";
import { useState } from "react";

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [errMsg,setMsg] = useState()
  const [data, setData] = useState([]);
  const log = (value) => {
    setIsLogged(value);
  };
  return (
    !isLogged ? <LoginPg log={log} msg={errMsg} errMsg={setMsg} setData={setData} /> : <LoginUser data={data}/>
  );
}


export default Login;
