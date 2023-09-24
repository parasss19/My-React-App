import React from 'react'
import "./NewExpenses.css"
import ExpenseForm from './ExpenseForm'


export default function NewExpenses(props) {

  const saveExpenseHandler = (expenseValue) => {
    const expenseData = {
      ...expenseValue,
      id: Math.random().toString()
    }

    // console.log(expenseValue)   //it contain title,amount and date jisko hum spread operator ka use krke expenseform se laye h
    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense = {saveExpenseHandler} />
    </div>
  )
}
