const max = document.getElementById('high')
const min = document.getElementById('low')
const last = document.getElementById('last')
const btn = document.getElementsByClassName('button')

const API_BTC = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
})

const API_TEMPO = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?format=json-cors&key=3ba4b93b'
});

async function consultarBTC(){
    const response = await API_BTC.get()
    max.innerText = 'Máximo :'+response.data.ticker.high;
    min.innerText = 'Mínimo :'+response.data.ticker.low;
    last.innerText = 'Atual :'+response.data.ticker.last;
}

