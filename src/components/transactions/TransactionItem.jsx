/* eslint-disable react/prop-types */
import { useGlobalState } from "../../context/GlobalState";
const TransactionItem = ({transaction}) => {

    const {deleteTransaction} = useGlobalState();

    return (
        <>
            <li key={transaction.id} className="bg-zinc-700 hover:bg-indigo-500 delay-100 transition text-white px-3 shadow-lg py-1 rounded-lg mb-2 w-full flex justify-between items-center">
                <p className="text-sm mr-4">{transaction.description?.toUpperCase()}</p>
                <div className="justify-between flex items-center">
                    <span className="mr-4 text-gray-300 text-xs">{transaction.type}</span>
                    <span className="mr-4 font-bold">{transaction.amount}</span>
                    <button onClick={() => {
                        deleteTransaction(transaction.id)
                    }}
                        className="bg-slate-300 py-1 px-3 text-xs rounded-lg text-indigo-500 font-bold"
                    ><i className="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            </li>
        </>
    )
}

export default TransactionItem