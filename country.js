const countriesLoad=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}
countriesLoad();

const displayCountry=(countries)=>{
    countries.forEach(country=>{
        const countryDiv=document.getElementById('country');
        const div=document.createElement('div');
        div.classList.add('container');
        div.innerHTML=`
            <h3>Country Name: ${country.name}</h3>
            <p>Capital: ${country.capital}</p>
            <p>Region: ${country.region}</p>
            <button onclick="loadCountryDetail('${country.name}')">Details</button>
        `;
        console.log(country)
        countryDiv.appendChild(div);
    })
}
//detail country information by name object property
const loadCountryDetail=(name)=>{
    const url=`https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountryDetail(data[0]))
}
// /displayCountries in a div
const displayCountryDetail=(country)=>{
    const div=document.getElementById('countryDetail');
    div.innerHTML=`
    <h3>Country Name: ${country.name}</h3>
    <img style="width:200px" src='${country.flag}'>
    <p>Capital: ${country.capital}</p>
    <p>Cioc: ${country.cioc}</p>
    <p>Currency: ${country.currencies[0].name}</p> 
    <p>Currency Symbol: ${country.currencies[0].symbol}</p>
    <p>Language: ${country.languages[0].name}</p>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    <p>Sub Region: ${country.subregion}</p>
    <p>Regional Block: ${country.regionalBlocs[0]}</p>
    <p>Time Zone: ${country.timezones[0]}</p>
    <p>Short Code(3):${country.alpha3Code}</p>
    <p>Short Code(2):${country.alpha2Code}</p>
    <p>Calling Code:${country.callingCodes[0]}</p>
    <p>Borders:${country.borders[0]}, ${country.borders[1]}, ${country.borders[2]}, ${country.borders[3]}</p>
        
    `;
    console.log(country)
}