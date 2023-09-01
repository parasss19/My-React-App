## PROPS
- Data are present in app.js 
- and i want to use it in ExpenseItem component
- we can use props in two ways


## App.js

```
function App() {

  //expenses ka data yha h but humko ExpenseItem component m use krna h so we use prop
  const expenses = [
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>

    Approach 1  - when we use each item of data in separate prop

    <ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date} />
    <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date} />
    <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date} />
    <ExpenseItem title = {expenses[3].title} amount = {expenses[3].amount} date = {expenses[3].date} /> 

    Approach 2  - when we use one prop 

    <ExpenseItem expense = {expenses[0]} />
    <ExpenseItem expense = {expenses[1]} />
    <ExpenseItem expense = {expenses[2]} />
    <ExpenseItem expense = {expenses[3]} />

    </div>
  );
}
```


## ExpenseItem.js

### Approach 1 

   ```
   function ExpenseItem(props) {
    <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
   }
   ```

### Approach 2

        ```
        function ExpenseItem(props) {
        <div className='expense-item'>
            <div>{props.expense.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>${props.expense.amount}</div>
            </div>
        </div>
        }
         ```






