let numeroActual = '0';
let operador = '';
let operando = '';

const inputDisplay =  document.querySelector('.display');

const buttons = document.querySelectorAll('button')
console.log(buttons)

buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        const buttonText = event.target.textContent;
        inputDisplay.value = buttonText


        if('+-*'.includes(buttonText)){
            console.log(numeroActual)
            operador = buttonText;
            console.log(operador)
            operando = Number(numeroActual);
            console.log(operando)
            numeroActual = '0'
            console.log(numeroActual)

        } else if (buttonText ==='='){
            if( operador === '+'){
                numeroActual = Number(operando) + Number(numeroActual);
            } else if( operador === '-'){
                numeroActual = Number(operando) - Number(numeroActual);
            } else if( operador === '*'){
                numeroActual = Number(operando) * Number(numeroActual);
            } 
        } else if(buttonText === 'AC'){
            numeroActual = '0';
            operador = '';
            operando = '';
        }else {
            // cuando presiono cualquier numero 
            numeroActual = numeroActual + Number(buttonText)
        }

        inputDisplay.value = numeroActual
    })
})