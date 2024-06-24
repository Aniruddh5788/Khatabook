import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Dashboard from './component/Dashboard'
import Form from './component/Form'
import ListGroup from './component/ListGroup'
import { TransactionProvider } from './conText/TransactionContext'

const App = () => {

  const [tranctions,setTranctions]=useState([]);

  const [edit,setEdit]=useState({
    tranctions:{},
    isEdit:false,
  })
  return (
    <TransactionProvider>
      <Navbar
        />
      <div className= { "container px-3 py-5"}>
      <Dashboard />
      <Form   />
      <ListGroup  />
          </div> 
    </TransactionProvider>
  )
}

export default App
