

const Accounts = () => {
  const styledDiv = "w-full shadow rounded-3xl p-5"
  return (
    <div className='w-full shadow rounded-3xl p-5 h-full'>
      <h2 className='font-bold text-2xl pb-5'>Cuentas</h2>
      <div className="flex justify-between gap-5">
        <div className={styledDiv}>
          <p>Ahorros</p>
          <p>3000€</p>
        </div>
         <div className={styledDiv}>
          <p>Gastos</p>
          <p>5000€</p>
        </div>
         <div className={styledDiv}>
          <p>Otros</p>
          <p>2000€</p>
        </div>
      </div>
    </div>
  )
}

export default Accounts
