import './ExpenseItem.css'

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US' ,{month: 'long'})
    const Day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const Year = props.date.getFullYear()

    return (
        <div className='expense-item'>
            <div>{month}</div>
            <div>{Day}</div>
            <div>{Year}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
