import './App.scss'
import ExpenseChartHeader from "./ExpenseChartHeader";
import ExpenseChart from "./ExpenseChart";
import dailyData from "./data";
import ExpenseChartGraph from "./ExpenseChartGraph";

function App() {

    return (
        <div className="App" role='main'>
            <ExpenseChartHeader balance={921.48}/>
            <ExpenseChart total={478.33}>
                <ExpenseChartGraph expenses={dailyData}/>
            </ExpenseChart>
        </div>
    )
}

export default App
