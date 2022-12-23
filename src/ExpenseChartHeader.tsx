import logoSvg from './assets/logo.svg';

function ExpenseChartHeader({balance}: {balance: number})
{
    return (<div className={'chart-header'}>
        <div>
            <p>My balance</p>
            <h2>${balance}</h2>
        </div>

        <div>
            <img src={logoSvg} alt="expense header logo"/>
        </div>

    </div>)
}

export default ExpenseChartHeader;