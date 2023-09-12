

export const Header = () => {
  return (
    <header className="flex justify-between w-[740px] m-auto my-5 bg-slate-900" >
        <div>
            <h1 className="text-4xl font-extrabold text-amber-50 ">
            Invoices</h1>
            <span className=" text-amber-50">there are 7 total invoices </span>
        </div>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-between" >
        [+]
        New Invoice
        </button>
  </header>
  )
}
