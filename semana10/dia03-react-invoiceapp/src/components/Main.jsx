
const formatNumber = (number)=> new Intl.NumberFormat('es-PE').format(number)
import { BaseTag } from "./shared/BaseTag"

export const Main = ({invoice}) => {

const types = {
    paid : 'emerald',
    pending : 'red',
    draft : 'slate'
}



  return (
    <main className="w-[740px] m-auto flex flex-col gap-5 ">
      {invoice.map(invoice =>{
        return (
          
          <article key={invoice.id} 
            className="border bg-slate-800 px-3
            py-4 rounded-xl text-white grid grid-cols-6 gap-2"
            >
          
          
          <div>{invoice.code}</div>
          <div>{invoice.invoice.date}</div>
          <div>{invoice.bill.to.client.name}</div>
          <div>
            {invoice.invoice.currency.symbol}
            {formatNumber(invoice.invoice.grandTotal)}
            </div>
          <BaseTag invoice={invoice} types = {types[invoice.status]}></BaseTag>
          <div>**</div>

          </article>
          
          
        )
        
      })}

    </main>
  )
}
