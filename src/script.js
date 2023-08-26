let max = document.getElementById('high')
let min = document.getElementById('low')
let last = document.getElementById('last')
let btn = document.getElementById('botao')
let inpCity = document.getElementById('text')
let btnCity = document.getElementById('cityButton')




const API_BTC = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
})

const API_TEMPO = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?format=json-cors&key=3ba4b93b&city_name='
});

async function consultarBTC(){
    const response = await API_BTC.get()
    max.innerText = 'Máximo :'+response.data.ticker.high;
    min.innerText = 'Mínimo :'+response.data.ticker.low;
    last.innerText = 'Atual :'+response.data.ticker.last;
}

async function consultaTempo(){
    let value = await inpCity.value
    const response = await API_TEMPO.get(`${value}`)
    console.log(response)
    console.log(response.data.results.city)
    console.log(response.data.results)
}

botao.addEventListener('click', consultarBTC)

btnCity.addEventListener('click', consultaTempo)
