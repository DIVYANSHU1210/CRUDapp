import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import { Routes, Route } from 'react-router-dom'
import AddCustomer from './components/addCustomer'
import CustomerTable from './components/customer-table/CustomerTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/addNewCustomer' element={<AddCustomer/>}></Route>
        <Route path='/customor-table' element={<CustomerTable/>}></Route>
      </Routes>
    </>
  )
}

export default App
