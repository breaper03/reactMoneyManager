import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"
export const TransactionForm = () => {
    const { addTransaction } = useGlobalState();
    const [description, setDescription] = useState();
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState();
    const [message, setMessage] = useState()

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(type, "type")

        if (type === undefined || type === "---" || amount === undefined || description === undefined) {
            // setMessage("Selecciona un tipo de transaccion valido...")
            setMessage(true)
        } else {
            addTransaction({
                id: window.crypto.randomUUID(),
                amount: +amount,
                type,
                description
            });
            setMessage(false)
            // setMessage("Transaccion agregada exitosamente...")
        }
    }

    const transactionsTypes = ["Income", "Expense", "Saves", "Mounthly", "Earnings"];

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    onChange={(e) => setDescription(e.target.value)} 
                    type="text"
                    minLength="5"
                    placeholder="Ingresa una descripcion"
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full border-2 border-indigo-300"
                />
                <input
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    step="0.10"
                    placeholder="0.00"
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full border-2 border-indigo-300" 
                />

                <select
                    onChange={(e) => setType(e.target.value)}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full border-2 border-indigo-300" 
                >   
                    <option key="0">---</option>
                    {
                        transactionsTypes.map(x => {
                            return <option key={x}>{x}</option>
                        })
                    }
                </select>
                {/* <span className="bg-red-900 px-3 py-2 mb-2.5 rounded-lg flex w-full">{message}</span> */}
                {   
                    message !== undefined
                        ? message
                            ? (
                                <span 
                                    className="delay-100 transition hover:bg-[#cd3939] hover:border-[#cd39396b] border-[#cd3939] border-2 bg-[#cd39396b] opacity-2 px-3 py-2 mb-2.5 rounded-lg flex w-full"
                                >Transaccion invalida...</span>
                            )
                            : (
                                <span 
                                    className="delay-100 transition hover:bg-[#39cd4d] hover:border-[#39cd4d6b] border-[#39cd4d] border-2 bg-[#39cd4d6b] opacity-2 px-3 py-2 mb-2.5 rounded-lg flex w-full"
                                >Transaccion agregada exitosamente...</span>
                            )
                        : <span></span>
                }
                <button className="bg-indigo-500 text-white px-3 py-2 rounded-lg block mb-2 w-full items-center">
                    Add Transaction <i className="fa fa-plus-square" aria-hidden="true"></i>
                </button>
            </form>
        </>
    )
}

// export default TransactionForm