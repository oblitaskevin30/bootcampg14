const buttonCalcular = document.getElementById('calcular')
const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')
const divResultado = document.getElementById('resultado')

buttonCalcular.addEventListener("click",function(event){
    const peso = inputPeso.value
    const altura = inputAltura.value

    console.log(peso, altura)

    const indiceDeMasaCorporal = peso / ((altura/100)**2)

    console.log(indiceDeMasaCorporal)

    let resultado=''

    if(indiceDeMasaCorporal>30){
        resultado = 'obeso';
    } else if (indiceDeMasaCorporal > 25) {
        resultado = 'Sobrepeso'
    } else if (indiceDeMasaCorporal > 18.5) {
        resultado = 'normal'
    } else if (indiceDeMasaCorporal>0){
        resultado = 'baja'
    } else{
        resultado = 'Datos incorrectos'
    }

    divResultado.innerText = 'tu indice de Masa Corporal es '+ indiceDeMasaCorporal.toFixed(2) + '....... tienes '+ resultado;
    console.log(event)
})

inputPeso.addEventListener('input', function(event){
    console.log(event)
})