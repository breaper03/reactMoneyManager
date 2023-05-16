import { useGlobalState } from "../../context/GlobalState";
import {TransactionItem} from "./TransactionItem";
export const TransactionList = () => {

    const {transactions} = useGlobalState();
    return (
        <>
            <ul>
                {
                    transactions.map(transaction => (
                        <TransactionItem transaction={transaction} key={transaction.id}/>
                    ))
                }
            </ul>
            
        </>
    )
}

// export default TransactionList