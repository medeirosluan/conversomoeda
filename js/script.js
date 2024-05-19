const operacao = document.querySelector('#operacao')
const inPrimeiro = document.querySelector('#inPrimeiro')
const inSegundo = document.querySelector('#inSegundo')
const msg = document.querySelector('p')
const btn = document.querySelector('#btn')

function matematica(){
  resultadoOperacao = ''

  const numeroUm = parseFloat(inPrimeiro.value)
  const numeroDois = parseFloat(inSegundo.value)
  const operacaoSelecionada = operacao.value


  switch(operacaoSelecionada){
    case 'Multiplicação': resultadoOperacao = numeroUm * numeroDois
    break
    case 'Divisão': resultadoOperacao = numeroUm / numeroDois
    break
    case 'Subtração': resultadoOperacao = numeroUm - numeroDois
    break
    case 'Adição' : resultadoOperacao = numeroUm + numeroDois
    break
 
  }

  return resultadoOperacao

}

btn.addEventListener('click',() =>{
  const valores = matematica()
  msg.innerText = `${valores.toFixed(1)}`
})