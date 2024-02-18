import React, {useState} from 'react'
import CustumInput from '../commonComponts/CustumInput'
import CustomBtn from '../commonComponts/CustomBtn';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        console.log("submited!!")
        navigate("/customor-table")
    }
  return (
    <div className='login-page'>
        <h1>Login Page</h1>
        <div className='input-section'>
            <CustumInput type="text" placeholder="login id" value={userId} setFuction={setUserId}/>
            <CustumInput type="text" placeholder="password" value={password} setFuction={setPassword}/>
        </div>
        <CustomBtn text="Submit" onClick = {handleSubmit}/>
        
    </div>
  )
}

export default Login;