import React, { useState } from 'react'
import "./ExpenseForm.css"

export default function ExpenseForm(props) {

    //Mehtod 1 Using multiple state
    const [enterTitle, setTitle] = useState('')
    const [enterAmount, setAmount] = useState('')
    const [enterDate, setDate] = useState('')

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const amountHandler = (e) => {
        setAmount(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
    }

    //Method 2 using single state instead of multiple states
    // const [userInput, setUserInput] = {
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // }

    // const titleHandler = (e) => {
    //     setUserInput((prevState)=>{
    //        return {...prevState, enterTitle:e.target.value}
    //     })
    // }
    // const amountHandler = (e) => {
    //     setUserInput((prevState)=>{
    //         return {...prevState, enterAmount:e.target.value}
    //      })
    // }
    // const dateHandler = (e) => {
    //     setUserInput((prevState)=>{
    //         return {...prevState, enterDate:e.target.value}
    //      })
    // }

    const submitHandler = (event) => {
        event.preventDefault()    //prevent page reload when submit the form

        const expenseData = {
            title : enterTitle,
            amount : enterAmount,
            date : new Date(enterDate) 
        }
        
        props.onSaveExpense(expenseData)

        // after submiting the details form khali ho jaye
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={titleHandler} type="text" value={enterTitle}/>    {/* value={enterTitle} it is 2 way binding ->initially title empty hoga and jaise hi hum state change krenge(update krenge title) yha bhi change ho jayga */}
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountHandler} type="number" min='0.01' step='0.01' value={enterAmount}/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateHandler} type="Date" min='2021-01-01' max='2024-12-31' value={enterDate} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button>Add Expenses</button>
            </div>
        </form>
    )
}
