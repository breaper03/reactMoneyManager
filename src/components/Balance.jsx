import { useGlobalState } from "../context/GlobalState"

export const Balance = () => {

    const data = useGlobalState();

    return (
        <>
            <h1>Balance</h1>
            {JSON.stringify(data)}
        </>
    )
}
