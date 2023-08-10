
import { useState } from 'react';

export const Form = ({onSubmit}) => {
    const [input , setInput] = useState('');

    const handleChange = (event) =>{
        const valueText = event.target.value;
        // console.log(valueText)
        setInput(valueText);
        }

        const handleSubmit = (event)=>{
        event.preventDefault();

        if (input ==='') return

        const newTodo = {
            "id": crypto.randomUUID(), // generamos el nuevo ID irrepetible
            "title": input, // aca añadimos el titulo de la nueva tarea
            "completed": false // se setea en false
            
            }

            onSubmit(newTodo)

            setInput('')
        }


    return (
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
    )
}
