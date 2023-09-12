    // observar que aca el userID es solo un argumento 
    // no es necesario emplear el UseContext 
    // ya que es una funcion que emplearemos en el newBudget
    export const getUser = async (userId) => {
    const url = `https://64fd0d80596493f7af7e15de.mockapi.io/api/v1/users/${userId}`
    
        const response = await fetch(url)
    
        const data = await response.json()
    
        return data.budget
    }
    
    export const createExpense = async (name, amount) => {
        const url = `https://64fd0d80596493f7af7e15de.mockapi.io/api/v1/expenses`
    
        const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, amount })
        }
    
        const response = await fetch(url, options)
    
        const data = await response.json()
    
        return data.budget
    }
    
    
    export const fetchExpenses = async () => {
        const url = `https://64fd0d80596493f7af7e15de.mockapi.io/api/v1/expenses`
    
        const response = await fetch(url)
    
        const data = await response.json()
    
        return data
    }
    
    export const deleteExpense = async (id) => {
        const url = `https://64fd0d80596493f7af7e15de.mockapi.io/api/v1/expenses/${id}`
    
        const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
        }
    
        const response = await fetch(url, options)
    
        const data = await response.json()
    
        console.log(data)
    
        return data
    }