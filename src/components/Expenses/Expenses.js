import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';


function Expenses(props) {

    const [filterYear, setFilterYear] = useState('2023')

    //Derived/computed state
    // let filterInfoText = "2020,2021,2022"
    // if (filterYear == "2020") {
    //     filterInfoText = "2021,2022,2023"
    // } else if (filterYear == "2021") {
    //     filterInfoText = "2020,2022,2023"
    // } else if (filterYear == "2022") {
    //     filterInfoText = "2020,2021,2023"
    // }

    //Instead of using above code we use filter array method
    const filterYearMethod = props.items.filter((year)=>{
     return year.date.getFullYear().toString()== filterYear
    })

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }
    
    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filterYear} />

            {/* below code use nhi krenge now hum map method use krenge  */}
            {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}

            {
                filterYearMethod.map((expense) => (
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key = {expense.id}/>
                ))
            }
        </Card>
    );
}

export default Expenses;