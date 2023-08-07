import { useState } from "react"



function App() {

  const DEFAULT_TODOS=[
    {
      "id": "1",
      "title": "delectus aut autem",
      "completed": true
      },
      {
      "id": "2",
      "title": "quis ut nam facilis et officia qui",
      "completed": false
      },
      {
      "id": "3",
      "title": "fugiat veniam minus",
      "completed": false
      },
      {
      "id": "4",
      "title": "et porro tempora",
      "completed": true
      },
      {
      "id": "5",
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
      },
  ]
  const [todos, setTodos] = useState(DEFAULT_TODOS);
  const [input , setInput] = useState('');

  // funciones
    const handleChange = (event) =>{
      const valueText = event.target.value;
      // console.log(valueText)
      setInput(valueText);
    }

    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log('Im working....');
      
      const newTodo = {
        "id": crypto.randomUUID(), // generamos el nuevo ID irrepetible
        "title": input, // aca añadimos el titulo de la nueva tarea
        "completed": false // se setea en false
        
      }

      setTodos([...todos, newTodo])
      setInput('')
    }


    const handleCompleted =(event)=>{

      const isChecked = event.target.checked
      const idSelected= event.target.dataset.id

      const newTodos = todos.map(todo => {
        if (todo.id == idSelected){
          return {...todo, completed: isChecked}
        }

        return todo
      })

      console.log(newTodos)
      setTodos(newTodos)

    }


    const handleRemoveTodo = (event) => {
      const idSelected = event.target.dataset.id
  
      const newTodos = todos.filter(todo => todo.id !== idSelected)
  
      console.log(newTodos)
  
      setTodos(newTodos)
    }


    const completedTodos = () =>{
      const completed = todos.filter(todo => todo.completed === true)
      return completed.length

    }

    const handleClearTodos = () =>{
      const newTodos = todos.filter(todo => todo.completed === false)
      setTodos(newTodos)
    }



  return (
    <>
      <main className="w-full max-w-sm bg-red-500 mx-auto mt-10 rounded-lg p-4 shadow-lg border border-cyan-950">
          <h1 className="text-2xl font-bold "> TODO APP </h1>
          {/* {JSON.stringify(todos)} */}
          
          <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="w-full border my-3 p-3"
                placeholder="que harás hoy ?"
                required
                onChange={handleChange}
                value={input}
              />
          </form>

          <div className="flex justify-between">
          <span className="">{completedTodos()} / {todos.length}</span>
          <button
            className="bg-blue-500 rounded-lg px-2 py-1 text-white"
            onClick={handleClearTodos}
          >
            Limpiar tareas completadas
          </button>
          </div>

          <section className="mt-5">
            <ul className="flex flex-col gap-3">
                {todos.map(todo =>{
                  return (
                    
                    <li key={todo.id} 
                    className= "flex" 
                    >
                      <input 
                        type="checkbox" 
                        className="mr-4"
                        data-id = {todo.id}
                        checked = {todo.completed}
                        onChange={handleCompleted}
                      />
                      <div className="flex justify-between items-center w-full">
                        <div className= {`text-stone-900 ${todo.completed ? 'line-through' : ''} `}  >
                          {todo.title}
                        </div>

                        <button
                        className="font-bold bg-red-300 rounded-lg px-2 py-2 text-white"
                        data-id={todo.id}
                        onClick={handleRemoveTodo}
                        > ❎
                        </button>
                      </div>
                    </li>
                    )
                  })}

            </ul>
          </section>

      </main>
    
    
    </>
    

  )
}

export default App
