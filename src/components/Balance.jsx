import { useGlobalState } from "../context/GlobalState"

export const Balance = () => {

    const { transactions } = useGlobalState();
    // const amount = transactions.map( x => x.amount);

    const groupedTransactions = transactions.reduce((result, transaction) => {
        const type = transaction.type;
        if (!result[type]) {
            result[type] = [];
        }
        result[type].push(transaction);
        return result;
    }, {});

    const income = groupedTransactions.Income !== undefined ? groupedTransactions.Income?.map(x => x.amount).reduce((a, b) => a + b, 0) : 0;
    const expense = groupedTransactions.Expense !== undefined ? groupedTransactions.Expense?.map(x => x.amount).reduce((a, b) => a + b, 0) : 0;
    const saves = groupedTransactions.Saves !== undefined ? groupedTransactions.Saves?.map(x => x.amount).reduce((a, b) => a + b, 0) : 0;
    const fixedCost = groupedTransactions.Mounthly !== undefined ? groupedTransactions.Mounthly?.map(x => x.amount).reduce((a, b) => a + b, 0) : 0;
    const fixedIncome = groupedTransactions.Earnings !== undefined ? groupedTransactions.Earnings?.map(x => x.amount).reduce((a, b) => a + b, 0) : 0;

    const total = income - expense + saves - fixedCost + fixedIncome;
    
    return (
        <>
            <div className="flex justify-between mb-6 items-center">
                <h4 className="text-2xl font-bold">Balance</h4>
                <h1 className="text-2xl font-bold ">$ {+total}</h1>
            </div>
        </>
    )
}
