const max = document.getElementById('high')
const min = document.getElementById('low')
const last = document.getElementById('last')
const btn = document.getElementsByClassName('button')

const API = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
})

async function consultar(){
    const response = await API.get()
    max.innerText = 'Máximo :'+response.data.ticker.high;
    min.innerText = 'Mínimo :'+response.data.ticker.low;
    last.innerText = 'Atual :'+response.data.ticker.last;
}
