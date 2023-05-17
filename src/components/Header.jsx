import { useGlobalState } from "../context/GlobalState";
const Header = () => {

    const { transactions } = useGlobalState();

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

    const total = income - expense - fixedCost + fixedIncome;

    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-zinc-800 dark:border-gray-700 rounded-b-lg">
            <div
                className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <img
                        src="/icon.png"
                        className="h-8 mr-3"
                        alt="Flowbite Logo"/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap">Money Manager</span>
                </a>
                <div className="hidden w-full md:block md:w-auto">
                    <ul
                        className="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <a
                                href="#"
                                className="rounded hover:text-white transition-all delay-100 text-indigo-400 px-2 py-1.5"
                                aria-current="page">Balance: ${total}</a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="rounded hover:text-white transition-all delay-100 text-indigo-400 px-2 py-1.5"
                                aria-current="page">Ahorros: ${saves}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header