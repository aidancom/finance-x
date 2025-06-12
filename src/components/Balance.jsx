import { useAppStore } from "../stores/useAppStore"
import { formatCurrency } from "../utils/currency";

const Balance = () => {

  const data = useAppStore(state => state.accounts)
  const balance = data.reduce((acc, account) => acc + account.ammount, 0);
  const accounts = data.map(account => Object.values(account))
  const ammounts = accounts.map(ammount => ammount[2]);
  const max = Math.max(...ammounts)

  return (
    <div className='w-full shadow rounded-3xl p-5 h-full'>
      <h2 className='font-bold text-2xl pb-5'>Balance</h2>
      <div className='border-b-2 border-gray-300 flex gap-5 align-bottom items-end'>
        {ammounts.map((ammount, i) => (
          <div key={i} style={{ height: `${(ammount / max) * 100}px` }} className='bg-amber-500 w-1/6'></div>
        ))}
      </div>   
      <p className='pt-5'>Total: <span className='font-bold'>{formatCurrency(balance)}</span></p> 
    </div>
  )
}

export default Balance
