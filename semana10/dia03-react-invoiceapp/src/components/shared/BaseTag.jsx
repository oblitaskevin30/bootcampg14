

export const BaseTag = ({invoice,types}) => {
  return (
    <>
        
        <div className= {`py-3 bg-${types}-400 rounded-md text-center capitalize first-letter 
        font-extrabold min-w-[120px]`} >
            <span className= {`bg-${types}-400`} >•</span>
            {invoice.status}
            {types}
        </div>
    </>

  )
}
