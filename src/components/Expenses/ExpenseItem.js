import React  from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

function ExpenseItem(props) {
    return (
        //yha now hum div ki jagah apna component Card as wrapper use krenge
        <Card className='expense-item'>

            {/* we took date as new component so app.js se jo data lekar aye the(date,title,amount)
             usme se date ko further pass krna hoga as usko new component m le gye h */}
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>  
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;



// phle without eventhandler ese likha tha function so static tha
// function ExpenseItem(props) {
//     return (
//         //yha now hum div ki jagah apna component Card as wrapper use krenge
//         <Card className='expense-item'>
//             {/* we took date as new component so app.js se jo data lekar aye the(date,title,amount)
//              usme se date ko further pass krna hoga as usko new component m le gye h */}
//             <ExpenseDate date={props.date} />
//             <div className='expense-item__description'>
//                 <h2>{props.title}</h2>
//                 <div className='expense-item__price'>${props.amount}</div>
//                 <button>Change Item</button>
//             </div>
//         </Card>
//     );
// }
