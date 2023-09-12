export const getAllItem = async () => {
    const url = `https://64fe9bcbf8b9eeca9e28dc1e.mockapi.io/api/v1/items/`
    
        const response = await fetch(url)
    
        const data = await response.json()
        console.log(data)
    
        return data
}


    export const getItem = async (itemId) => {
        const url = `https://64fe9bcbf8b9eeca9e28dc1e.mockapi.io/api/v1/items/${itemId}`
        
            const response = await fetch(url)
        
            const data = await response.json()
            console.log(data)
        
            return data
    }

    export const deleteItem = async (itemId) => {
            const url = `https://64fe9bcbf8b9eeca9e28dc1e.mockapi.io/api/v1/items/${itemId}`
        
            const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
            }
        
            const response = await fetch(url, options)
        
            const data = await response.json()
        
            console.log(data)
            location. reload()
            
        
            return data
    }