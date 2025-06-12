import { useAppStore } from "../stores/useAppStore"
import { formatCurrency } from "../utils/currency"

const Accounts = () => {

  const styledDiv = "w-full shadow rounded-3xl p-5"

  const accounts = useAppStore(state => state.accounts)

  return (
    <div className='w-full shadow rounded-3xl p-5 h-full'>
      <h2 className='font-bold text-2xl pb-5'>Cuentas</h2>
      <div className="flex justify-between gap-5">
        {accounts.length ? (
          accounts.map(acc => (
            <>
              <div 
                key={acc.id}
                className={styledDiv}>
                <p>{acc.name}</p>
                <p>{formatCurrency(acc.ammount)}</p>
              </div>
            </>
          ))
        ) : (
          <p>No hay cuentas</p>
        )}
      </div>
    </div>
  )
}

export default Accounts
