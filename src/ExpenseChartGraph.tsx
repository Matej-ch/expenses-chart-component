import IExpenses from "./IExpenses";

function ExpenseChartGraph({expenses}: { expenses: IExpenses[] }) {

    const today = (new Date()).toLocaleDateString('en-US', {weekday: 'short'}).toLowerCase();

    return (<div className={'chart-graph'}>
        {expenses.map((expense, index) => {

            const height = (expense.amount * 3).toFixed(0);
            return <div key={index}>
                <div className={today === expense.day ? 'graph today' : 'graph'}
                     style={{height: height + 'px'}}></div>
                <span className={'hover-price'}>${expense.amount}</span>
                <span className={'text-light'}>{expense.day}</span>
            </div>
        })}
    </div>);
}

export default ExpenseChartGraph