const taskInput = document.querySelector('.task_input');
const taskAdd = document.querySelector('.task_add');
const taskList = document.querySelector('.task_list');

taskAdd.addEventListener('click',function(event){
    // const button = document.createElement('button')
    // button.innerText = 'hola'


    if (taskInput.value ===''){
        alert('campo requerido')
        return
    }
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    li.appendChild(checkbox)

    const span = document.createElement('span')
    span.innerText = taskInput.value
    li.appendChild(span)
    
    

    // creamos un boton
    const button = document.createElement('button');
    button.innerText = 'Borrar'
    li.appendChild(button)

    taskList.appendChild(li)
    taskInput.value = ''
})

taskList.addEventListener('click',function (event) {

    // console.log(event)
    const target = event.target
    if(target.tagName === 'INPUT' && target.type === 'checkbox'){
        target.classList.toggle('checked')

        // target.classList.add('container') para agregar clase a una etiqueta
    }

    if(target.tagName === 'BUTTON'){
        target.parentElement.remove()
    }
})