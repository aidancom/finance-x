import Balance from "../components/Balance"
import Accounts from "../components/Accounts"
import RecentTransactions from "../components/RecentTransactions"

const Dashboard = () => {
  return (
    <main className="p-5">
      <div className="h-[100px] grid grid-cols-[40%_30%_25%] gap-10">
        <Balance/>
        <Accounts/>
        <RecentTransactions/>
      </div>
    </main>
  )
}

export default Dashboard
