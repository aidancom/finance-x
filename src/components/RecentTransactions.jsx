

const RecentTransactions = () => {
  return (
    <div className='w-full shadow rounded-3xl p-5 flex flex-col h-full'>
      <h2 className='font-bold text-2xl pb-5'>Transacciones recientes</h2>
      <div className="h-[100px] overflow-y-scroll">
        <div>
          <div className="flex justify-between items-center pr-5">
            <div>
              <p className="font-medium">Comida gato</p>
              <p>20/10/2023</p>
            </div>
            <p>-50€</p>
          </div>
          <div className="w-full h-0.5 bg-amber-500 my-2"></div>
          <div className="flex justify-between items-center pr-5">
            <div>
              <p className="font-medium">Comida gato</p>
              <p>20/10/2023</p>
            </div>
            <p>-50€</p>
          </div>
          <div className="w-full h-0.5 bg-amber-500 my-2"></div>
          <div className="flex justify-between items-center pr-5">
            <div>
              <p className="font-medium">Comida gato</p>
              <p>20/10/2023</p>
            </div>
            <p>-50€</p>
          </div>
          <div className="w-full h-0.5 bg-amber-500 my-2"></div>
          
        </div>

      </div>
    </div>
  )
}

export default RecentTransactions
