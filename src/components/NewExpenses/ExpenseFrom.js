import React, { useState } from 'react'
import "./ExpenseForm.css"

export default function ExpenseFrom() {

    //Mehtod 1 Using multiple state
    const [enterTitle, setTitle] = useState('')
    const [enterAmount, setAmount] = useState('')
    const [enterDate, setDate] = useState('')

    const titleHandler = (e)=>{
        setTitle(e.target.value)
    }
    const amountHandler = (e)=>{
        setAmount(e.target.value)
    }
    const dateHandler = (e)=>{
        setDate(e.target.value)
    }

    //Method 2 using single state instead
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


    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={titleHandler} type="text" />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountHandler} type="number" min='0.1' max='0.1' />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateHandler} type="Date" min='2021-01-01' max='2024-12-31' />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expenses</button>
            </div>
        </form>
    )
}
