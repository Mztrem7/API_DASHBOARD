let max = document.getElementById('high')
let min = document.getElementById('low')
let last = document.getElementById('last')
let btn = document.getElementById('botao')
let inpCity = document.getElementById('text')
let btnCity = document.getElementById('cityButton')
let inpCEP = document.getElementById('inpCEP')
let btnCEP = document.getElementById('btnCEP')




const API_BTC = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
})

const API_TEMPO = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?format=json-cors&key=a4709083&city_name='
});

const API_CEP = axios.create({
    baseURL:'viacep.com.br/ws/01001000/json/'
})

async function consultarBTC(){
    const response = await API_BTC.get()
    max.innerText = 'Máximo :'+response.data.ticker.high;
    min.innerText = 'Mínimo :'+response.data.ticker.low;
    last.innerText = 'Atual :'+response.data.ticker.last;
}

async function consultarCEP(){
    const response = await API_CEP.get()
    console.log(response);
}

async function consultaTempo(){
    let city = document.getElementById("city")
    let temp = document.getElementById("temp")
    let desc = document.getElementById("desc")
    let value = await inpCity.value
    const response = await API_TEMPO.get(`${value}`)
    console.log(response)
    city.innerText = response.data.results.city
    temp.innerText = response.data.results.temp + "ºC"
    desc.innerText = response.data.results.description
}

botao.addEventListener('click', consultarBTC)

btnCity.addEventListener('click', consultaTempo)

btnCEP.addEventListener('click', consultarCEP)