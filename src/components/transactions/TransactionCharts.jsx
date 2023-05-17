/* eslint-disable no-unused-vars */
import { useGlobalState } from "../../context/GlobalState";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale);
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
        labels:["Ingresos", "Gastos", "Ahorros", "Gastos Fijos", "Ingresos Fijos"],
        datasets: [
            {
                label:'',
                data: [
                    income !== undefined ? income.reduce((a, b) => a + b, 0) : 0.1,
                    expense !== undefined ? expense.reduce((a, b) => a + b, 0) : 0.1,
                    saves !== undefined ? saves.reduce((a, b) => a + b, 0) : 0.1,
                    fixedCost !== undefined ? fixedCost.reduce((a, b) => a + b, 0) : 0.1,
                    fixedIncome !== undefined ? fixedIncome.reduce((a, b) => a + b, 0) : 0.1,
                ],
                backgroundColor: ["#4ade8061", "#f8717161", "#60a5fa61", "#dc262661", "#16a34a61"],
                borderColor: ["#4ade80","#f87171", "#60a5fa", "#dc2626", "#16a34a"],
                borderWidth: 1,
                RTCIceTransport: true
            },
        ],
    };

    return (
        <div className="justify-center w-full p-3">
            {/* <Doughnut data={data} /> */}
            <Bar data={data}/>
        </div>
    )
}

// export default TransactionCharts