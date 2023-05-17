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
        <div className="justify-center items-center p-5">  
            <div>
                <h4 className="font-bold text-xl text-indigo-400 mb-3">AGREGAR TRANSACCION</h4>
            </div>
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
                                    className="mt-8 delay-100 transition hover:bg-[#cd3939] hover:border-[#cd39396b] border-[#cd3939] border-2 bg-[#cd39396b] opacity-2 px-3 py-2 mb-2.5 rounded-lg flex w-full"
                                >Transaccion invalida...</span>
                            )
                            : (
                                <span 
                                    className="mt-8 delay-100 transition hover:bg-[#39cd4d] hover:border-[#39cd4d6b] border-[#39cd4d] border-2 bg-[#39cd4d6b] opacity-2 px-3 py-2 mb-2.5 rounded-lg flex w-full"
                                >Transaccion agregada exitosamente...</span>
                            )
                        : (
                            <span 
                                    className="mt-8 text-[#ffffff00] delay-100 transition hover:bg-transparent hover:border-transparent border-transparent border-2 bg-transparent opacity-2 px-3 py-2 mb-2.5 rounded-lg flex w-full"
                                >.</span>
                        )
                }
                <button className="bg-indigo-400 text-white border-2 border-indigo-400 px-3 py-2 mt-8 rounded-lg block w-full items-center hover:bg-indigo-300 transition delay-75">
                    Add Transaction <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    )
}

// export default TransactionForm