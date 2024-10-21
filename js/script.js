const btn = document.querySelector('button')
const valorReal = document.querySelector('.valor-converte')
const valorDolar = document.querySelector('.valor-convertido')
const selecaoMoeda = document.querySelector('#selecao-valor')
const logoMoney  = document.querySelector('.logo-moeda')
const aviso = document.querySelector('.msg')
const valorEntrada = document.querySelector('input')

function converteValor() {
    const valorDolarDia = 6.13
    const valorEuroDia = 5.64

    if (selecaoMoeda.value === 'dolar') {
        valorDolar.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorEntrada.value / valorDolarDia)

        logoMoney.src = './assets/dolar.png'
        aviso.innerHTML = 'Dólar Americano'
    }

    else if (selecaoMoeda.value === 'euro') {
        valorDolar.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorEntrada.value / valorEuroDia)

        logoMoney.src = './assets/euro.png'
        aviso.innerHTML = 'Euro'

    }

    valorReal.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorEntrada.value)


}

btn.addEventListener('click', converteValor)


