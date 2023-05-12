import { useState } from "react"
import { useGlobalState } from "../context/GlobalState"
const TransactionForm = () => {
    const { addTransaction } = useGlobalState();
    const [description, setDescription] = useState();
    const [amount, setAmount] = useState(0);
    
    const onSubmit = (e) => {
        e.preventDefault()
        addTransaction({
            id: 1,
            amount,
            description
        });
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    onChange={(e) => setDescription(e.target.value)} 
                    type="text" 
                    placeholder="Ingresa una descripcion" 
                />
                <input
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    step="0.10"
                    placeholder="0.00" 
                />
                <button>
                    Add Transaction
                </button>
            </form>
        </>
    )
}

export default TransactionForm