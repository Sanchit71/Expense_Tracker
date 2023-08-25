import { useState } from 'react'
import {Balance} from './components/balance'
import { Header } from './components/header'
import { IncomeExpense } from './components/incomeExpense'
import './App.css'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/addTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense/>
        <TransactionList/>        
        <AddTransaction/>
      </div>
    </GlobalProvider> 
  )
}

export default App
