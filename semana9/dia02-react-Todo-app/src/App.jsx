import { useState } from "react"



function App() {

  const DEFAULT_TODOS=[
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": true
      },
      {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
      },
      {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
      },
      {
      "id": 4,
      "title": "et porro tempora",
      "completed": true
      },
      {
      "id": 5,
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
      console.log('im working');
      
      const newTodo = {
        "id": crypto.randomUUID(),
        "title": input,
        "completed": false
        
      }

      setTodos([...todos, newTodo]);
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
                onChange={handleChange}
              />
          </form>



          <section className="mt-5">
            <ul className="flex flex-col gap-3">
                {todos.map(todo =>{
                return (
                  
                  <li key={todo.id} 
                  className={`text-stone-900 ${todo.completed ? 'line-through' : ''} `}  
                  >
                    <input type="checkbox" className="mr-4" />
                    <span className="pr-3">{todo.title}</span>
                    
                  </li>)
                })}

            </ul>
          </section>

      </main>
    
    
    </>
    

  )
}

export default App
