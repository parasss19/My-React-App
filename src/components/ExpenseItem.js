import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {
    return (
        <div className='expense-item'>

            {/* we took date as new component so app.js se jo data lekar aye the(date,title,amount)
             usme se date ko further pass krna hoga as usko new component m le gye h */}
            <ExpenseDate date={props.date} />

            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;


