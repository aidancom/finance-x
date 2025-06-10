import Balance from "../components/Balance"
import Accounts from "../components/Accounts"
import RecentTransactions from "../components/RecentTransactions"
import { PlusIcon } from "@heroicons/react/16/solid"
import { useAppStore } from "../stores/useAppStore"
import ModalAdder from "../components/ModalAdder"

const Dashboard = () => {

  const setModal = useAppStore(state => state.setModal)
  const modal = useAppStore(state => state.modal)

  return (
    <main className="p-5">
      <div className="h-[100px] grid grid-cols-[40%_30%_25%] gap-10">
        <Balance/>
        <Accounts/>
        <RecentTransactions/>
      </div>
      <button 
        className="text-white font-bold text-4xl bg-[#FE9A00] w-10 h-10 rounded-[100%] flex items-center justify-center absolute right-10 bottom-10 cursor-pointer"
        onClick={() => setModal(true)}
      >
        <PlusIcon className="w-7 text-white font-bold"/>
      </button>
      {modal && <ModalAdder/>}
    </main>
  )
}

export default Dashboard
