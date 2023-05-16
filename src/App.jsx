import { GlobalProvider } from './context/GlobalState'

// import Header from './components/Header'
import { Balance } from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionCharts from './components/transactions/TransactionCharts'
function App() {

  return (
    <>
      <GlobalProvider>
        <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
          <div className='container mx-auto w-3/5'>
            <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-10'>
              <div className='w-full'>
                {/* <Header /> */}
                <h1 className='text-4xl font-bold'>Expense Tracker</h1>
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div> 
              <div className='w-full'>
                <TransactionList />
                <TransactionCharts />
              </div>
            </div> 
          </div>
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
