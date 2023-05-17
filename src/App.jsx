import { GlobalProvider } from './context/GlobalState'

// import Header from './components/Header'
import { Balance } from './components/Balance'
import {TransactionForm} from './components/transactions/TransactionForm'
import {TransactionList} from './components/transactions/TransactionList'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransactionCharts} from './components/transactions/TransactionCharts'
import Header from './components/Header'
function App() {

  // return (
  //   <>
  //     <GlobalProvider>
  //       <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
  //         <div className='container mx-auto w-3/5'>
  //           <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-10'>
  //             <div className='w-full justify-center'>
  //               {/* <Header /> */}
  //               <h1 className='text-4xl font-bold'>Money Manager</h1>
  //               <IncomeExpenses />
  //               <Balance />
  //               <TransactionForm />
  //             </div> 
  //             <div className='w-full'>
  //               <TransactionList />
  //               <TransactionCharts />
  //             </div>
  //           </div> 
  //         </div>
  //       </div>
  //     </GlobalProvider>
  //   </>
  // )

  return (
    <>
      <GlobalProvider>
        <div className='bg-zinc-700 text-white w-full h-screen flex overflow-hidden'>
          {/* HEADER */}
          <section className='w-full'>
            <Header />
            {/* components */}
            <div className='flex w-[100%] justify-center'>
              <div>
                <section className='p-3 gap-6 w-full flex'>
                  {/* Income && Balance */}
                  <div className='gap-2 bg-transparent w-[45%] rounded-lg'>
                    <div className='mb-3.5 bg-zinc-800 p-3.5 rounded-lg shadow-md shadow-[#161616]'>
                      <IncomeExpenses />
                    </div>
                    <div className='gap-2 mb-5 bg-zinc-800  p-3.5 rounded-lg shadow-md shadow-[#161616] writen-animation'>
                      <Balance />
                    </div>
                    <div className='gap-2 bg-zinc-800  p-3.5 rounded-lg shadow-md shadow-[#161616]'>
                      <h4 className='text-xl font-bold text-indigo-300'>Good to see you again!!</h4>
                    </div>
                  </div>
                  {/* Form */}
                  <div className='gap-2 bg-zinc-800 w-[55%] p-5 rounded-lg shadow-md shadow-[#161616]'>
                    <TransactionForm />
                  </div>
                </section>
                <section className='flex justify-center items-center'>
                  {/* Charts */}
                  <div className='bg-zinc-800 w-[97%] rounded-lg shadow-md shadow-[#161616]'>
                    <div className=''>
                      <TransactionCharts />
                    </div>
                  </div>

                </section>
              </div>
              <div>
                <section className='p-3 gap-2 w-full flex justify-center'>
                  {/* history */}
                  <div className='justify-center bg-zinc-800 max-h-[85vh] overflow-hidden p-8 rounded-lg shadow-md shadow-[#161616]'>
                  <h1 className="text-2xl font-bold text-indigo-400">Historial de Transacciones</h1>
                    <div className='gap-2 justify-center h-[71.5vh] overflow-scroll box'>
                      <div className='justify-center'>
                        <TransactionList />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
