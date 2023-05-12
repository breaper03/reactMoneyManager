import { useGlobalState } from "../context/GlobalState"

export const Balance = () => {

    const { transactions } = useGlobalState();

    const amount = transactions.map( x => x.amount);
    const total = amount.reduce((acc, item) => (acc + item), 0)
    return (
        <>
            {/* {JSON.stringify(amount, null, 2)} */}
            <h4>Balance</h4>
            <h1>$ {total}</h1>
        </>
    )
}
