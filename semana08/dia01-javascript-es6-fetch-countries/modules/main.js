const url = 'https://restcountries.com/v3.1/all';

function fetchCountries(){
    // const response = fetch(url);
    // console.log(response)
    // response.then(data =>{
        
    // })

    return fetch(url) // devuelve la promesa, la cual esperaa que lleguen los datos 
        .then(response => response.json()) 
        // .then(data => console.log(data))
        .catch(err => console.log(err))

}

const renderCountries = function(countries){
    console.log(countries)
    const countryListElement = document.querySelector('.app_list')

    let countryList = ''
    countries.forEach(country => {
        countryList +=  `
        <div class = 'country'> 
            <img src="${country.flags.png}" class="country_flag" alt="${country.name.common}">
            <div class = 'country_wrapper'>
                <h2 class = "country_wrapper">${country.name.common}</h2>
                <div class = 'country_description'>
                    <strong>Population</strong> ${country.name.common}
                </div>
                <div class = 'country_description'>
                    <strong>Region</strong> ${country.region}
                </div>
                <div class = 'country_description'>
                    <strong>Capitak</strong> ${country.capital}
                </div>
            </div>
        </div>
        ` 
    });

    countryListElement.innerHTML = countryList
}


document.addEventListener('DOMContentLoaded', function(){
    console.log('el dom esta cargando')
    
    fetchCountries()
        .then(response => renderCountries(response))
})