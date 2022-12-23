function ExpenseChart({total, children}: { total: number, children?: JSX.Element | JSX.Element[] }) {
    return (<section className={'chart-body'}>
        <h2>Spending - Last 7 days</h2>

        {children}

        <footer>
            <div>
                <p className={'text-light'}>Total this month</p>
                <p className={'font-bold font-large'}>${total}</p>
            </div>
            <div>
                <p className={'font-bold text-right'}>+2.4%</p>
                <p className={'text-light text-right'}>from last month</p>
            </div>
        </footer>
    </section>)
}

export default ExpenseChart;