import React,{ useState }  from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

function ExpenseItem(props) {
    
    // now i want to change the title when click button
    const [title, setTitle] = useState(props.title)
    
    const clickHandler = ()=>{
        setTitle("Updated")
    }

    return (
        //yha now hum div ki jagah apna component Card as wrapper use krenge
        <Card className='expense-item'>

            {/* we took date as new component so app.js se jo data lekar aye the(date,title,amount)
             usme se date ko further pass krna hoga as usko new component m le gye h */}
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>  
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
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
