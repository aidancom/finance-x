import Balance from "../components/Balance"
import Accounts from "../components/Accounts"

const Dashboard = () => {
  return (
    <main className="p-5">
      <div className="grid grid-cols-[40%_30%_30%] gap-6">
        <Balance/>
        <Accounts/>
      </div>
    </main>
  )
}

export default Dashboard
