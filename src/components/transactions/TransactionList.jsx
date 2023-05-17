import { useGlobalState } from "../../context/GlobalState";
import {TransactionItem} from "./TransactionItem";
export const TransactionList = () => {

    const {transactions} = useGlobalState();
    return (
        <>
            <br />
            <ul>
                {
                    transactions.length
                    ? (transactions.map(transaction => (
                        <TransactionItem transaction={transaction} key={transaction.id}/>
                    )))
                    : <h4 className="text-xl font-bold text-slate-50">NO HAY TRANSACCIONES...</h4>
                }
            </ul>
            
        </>
    )
}

// export default TransactionList