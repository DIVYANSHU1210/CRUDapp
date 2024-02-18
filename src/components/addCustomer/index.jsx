import React, {useState} from 'react'
import CustumInput from '../commonComponts/CustumInput'
import CustomBtn from '../commonComponts/CustomBtn';
import { useNavigate } from 'react-router-dom';

function AddCustomer() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");

    const Navigate = useNavigate();

    const handleSubmit = ()=>{
        console.log("new customer submitted");
        Navigate("/customor-table");
    }


  return (
    <>
        <h1>Customer Details</h1>
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{display:'flex', flexDirection:"column"}}>
                <CustumInput placeholder="First Name" type="text" value={firstName} setState={setFirstName}/>
                <CustumInput placeholder="street" type="text" value={street} setState={setStreet}/>  
                <CustumInput placeholder="City" type="text" value={city} setState={setCity}/>
                <CustumInput placeholder="email" type="text" value={email} setState={setEmail}/>
            </div>
            <div style={{display:'flex', flexDirection:"column"}}>
                <CustumInput placeholder="Last Name" type="text" value={lastName} setState={setLastName}/>
                <CustumInput placeholder="Address" type="text" value={address} setState={setAdress}/>
                <CustumInput placeholder="state" type="text" value={state} setState={setState}/>
                <CustumInput placeholder="phone" type="text" value={phone} setState={setPhone}/>
                
            </div>
        </div>
        <CustomBtn text={"submit"} onClick={handleSubmit}/>      
    </>
  )
}

export default AddCustomer