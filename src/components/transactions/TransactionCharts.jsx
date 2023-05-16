import { useGlobalState } from "../../context/GlobalState";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const TransactionCharts = () => {

    // eslint-disable-next-line no-undef
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

    const data = {
        labels: [],
        datasets: [
            {
                label: 'Total ',
                data: [
                    // {x: ".", y: 0.1},
                    income !== undefined ? income.reduce((a, b) => a + b, 0) : 0.1,
                    expense !== undefined ? expense.reduce((a, b) => a + b, 0) : 0.1,
                    saves !== undefined ? saves.reduce((a, b) => a + b, 0) : 0.1,
                    fixedIncome !== undefined ? fixedIncome.reduce((a, b) => a + b, 0) : 0.1,
                    fixedCost !== undefined ? fixedCost.reduce((a, b) => a + b, 0) : 0.1
                ],
                backgroundColor: ["#f87171", "#4ade80", "#60a5fa", "#16a34a", "#dc2626"],
                borderColor: ["#f87171", "#4ade80", "#60a5fa", "#16a34a", "#dc2626"],
                borderWidth: 1,
            },
        ],
    };

    return (
        // className="bg-indigo-400 rounded-lg w-fit"
        <div className="rounded-lg h-fit">
            <Doughnut data={data} />
        </div>
    )
}

// export default TransactionCharts