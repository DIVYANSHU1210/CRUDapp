import React from 'react'
import CustomBtn from '../commonComponts/CustomBtn'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


function CustomerTable() {
    const navigate = useNavigate(); 
    const handleAddCustomer = ()=>{
        console.log("add customer Clicked");
        navigate("/addNewCustomer");
    }

  return (
    <div className='customer-table'>
        <h1>Customer List</h1>
        <CustomBtn text="Add Customer" onClick={handleAddCustomer}/>
        <table border={1}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>city</th>
                    <th>state</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Divyanshu</td>
                    <td>Joshi</td>
                    <td>abcRoad</td>
                    <td>Haldwani</td>
                    <td>Uttarakhand</td>
                    <td>abc@gmail.com</td>
                    <td>1234</td>
                    <td><a><MdDelete/></a>  <a><FaEdit/></a></td>
                </tr>
            </tbody>
            <tr></tr>
        </table>
    </div>
  )
}

export default CustomerTable