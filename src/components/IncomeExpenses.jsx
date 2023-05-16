import { useGlobalState } from "../context/GlobalState"

const IncomeExpenses = () => {

    const {transactions} = useGlobalState();

        const groupedTransactions = transactions.reduce((result, transaction) => {
            const type = transaction.type;
            if (!result[type]) {
                result[type] = [];
            }
            result[type].push(transaction);
            return result;
        }, {});

        const income = groupedTransactions.Income?.map(x => x.amount)
        const expense = groupedTransactions.Expense?.map(x => x.amount)
        const saves = groupedTransactions.Saves?.map(x => x.amount)
        const fixedCost = groupedTransactions.Mounthly?.map(x => x.amount)
        const fixedIncome = groupedTransactions.Earnings?.map(x => x.amount)

    return (
        <>
            <div className="w-full ">
                <div className="justify-between text-green-400 font-bold flex my-2">
                    <h4>INGRESOS:</h4>
                    <p>$ {income !== undefined ? income.reduce((a, b) => a + b, 0) : 0}</p>
                </div>
                <div className="justify-between text-red-400 font-bold flex my-2">
                    <h4>GASTOS:</h4>
                    <p>$ {expense !== undefined ? expense.reduce((a, b) => a + b, 0) : 0}</p>
                </div>
                <div className="justify-between text-blue-400 font-bold flex my-2">
                    <h4>AHORROS:</h4>
                    <p>$ {saves !== undefined ? saves.reduce((a, b) => a + b, 0) : 0}</p>
                </div>
                <div className="justify-between text-red-600 font-bold flex my-2">
                    <h4>GASTOS MENSUALES:</h4>
                    <p>$ {fixedCost !== undefined ? fixedCost.reduce((a, b) => a + b, 0) : 0}</p>
                </div>
                <div className="justify-between text-green-600 font-bold flex my-2">
                    <h4>INGRESOS MESUALES:</h4>
                    <p>$ {fixedIncome !== undefined ? fixedIncome.reduce((a, b) => a + b, 0) : 0}</p>
                </div>
            </div>
        </>

    )
}

export default IncomeExpenses