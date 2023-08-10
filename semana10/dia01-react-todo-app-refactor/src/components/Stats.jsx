

export const Stats = ({todos,onClearTodos}) => {


    const completedTodos = () =>{
        const completed = todos.filter(todo => todo.completed === true)
        return completed.length
  
      }

  return (

    


    <div className="flex justify-between">
        <span className="">{completedTodos()} / {todos.length}</span>
        <button
        className="bg-blue-500 rounded-lg px-2 py-1 text-white"
        onClick={onClearTodos}
        >
        Limpiar tareas completadas!
        </button>
  </div>
  )
}
