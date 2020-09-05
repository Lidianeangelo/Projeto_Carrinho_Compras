console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')

// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia
const falar=()=>'Pipipi popopo'

const dobro=(num)=>num * 2

const calcularMedia=(nota1, nota2, nota3) => {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}

// Vamos refatorar essas funções para a sintaxe de Arrow function





console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Callback')

// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.
const somar= (a, b)=>a + b

const subtrair=(a, b)=> a - b

const multiplicar=(a, b)=>a * b

const dividir=(a, b)=>a / b

const ordenar=(a, b)=>(a <= b) ? [a, b]:[b, a]




// Crie uma função chamada calcular que receberá como parâmetro: dois números e uma função de callback

function calcular(num1,num2,callback) {
  return callback(num1,num2)
}


// Faça a soma de dois números usando a função calcular

const resultadoSoma= calcular(3,3,somar)
console.log(`A soma de 3 mais 3 é ${resultadoSoma}.`)


// Faça a subtração de dois números usando a função calcular

const resultadoSubtrair=calcular(10,5,subtrair)
console.log(`A subtração de 10 menos 5 é ${resultadoSubtrair}.`)


// Faça a multiplicação de dois números usando a função calcular

const resultadoMultiplicar=calcular(10,2,multiplicar)
console.log(`A multiplicação de 10 vezes 2 é ${resultadoMultiplicar}.`)


// Faça a divisão de dois números usando a função calcular

const resultadoDividir=calcular(40,2,dividir)
console.log(`O resultado da divisão de 40 por 2 é ${resultadoDividir}.`)


// Faça a ordenação crescente de dois números usando a função calcular

const ordenarNumeros=calcular(11,7,ordenar)
console.log(`A ordem dos números é: ${ordenarNumeros} .`)


// Volte nas funções e refatore-as na sintaxe ES6

console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Condicionais')

// CONDICIONAIS
// Uma estudante obteve as seguinte notas: n1, n2 e n3
const n1 = 9
const n2 = 5
const n3 = 1

// Verifique se a estudante foi aprovada. Se a média das notas for maior ou igual a 7, a estudante passou!

let media= calcularMedia(n1, n2, n3)
console.log(media)

const resultado=(media >=7)? "aprovada!" :"reprovada"
console.log(`As notas foram ${n1}, ${n2} e ${n3}. A média foi ${media}. A aluna está ${resultado}.`)


console.log('-----------------------------------------------------')
// ----------------------------------------------
// OBJETOS
console.log('Objetos  🪑')

// Declaração de objetos
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7

const pokemon = {
  name: 'Pikachu',
  type: 'elétrico',
  height: 40.6,
}

// Fazer destructuring e acessar os valores de objeto e pokemon

const {name,type,height}=pokemon
console.log(`O ${name} é do tipo ${type} e pesa ${height} kg.`)

console.log("--------------------------------")

const {nome,tipo,peso}=objeto
console.log(`o objeto ${nome} é feito de ${tipo} e mede ${peso} cm.`)


console.log('-----------------------------------------------------')
// ----------------------------------------------
// DATAS
console.log('Datas 🗓')

// Outro exemplo de um objeto JavaScript é o Date.

// Vamos criar a variável chamada hoje que irá receber a data de hoje.

const hoje=new Date()
console.log(hoje)


// Vamos capturar os valores de dia, mes e ano da data de hoje pelos métodos de Date

//const diaDaSemana=hoje.getDay()
const dia=hoje.getDate()
const mes=hoje.getMonth()
const ano=hoje.getFullYear()

console.log(dia,mes,ano)


// Vamos criar uma data específica. Lembrando que mês de Janeiro é 0 no Javascript 🤷🏻‍♀️

const nascimento=new Date(1992,8,2)
console.log(nascimento)


// Podemos usar o método toLocaleString para formatar a data

const dataFormatada=nascimento.toLocaleDateString("pt-BR")
console.log(dataFormatada)


// Temos mais opções para formatar a data
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

console.log('-----------------------------------------------------')
// ----------------------------------------------

const pessoa = {
  nome: 'Yasminn',
  sobrenome: 'Vaz',
  idade: 25,
  altura: 1.62,
  peso: 55,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario:function(){pessoa.idade++},
  andar:function(metrosCaminhados){ 
    pessoa.andando = true
    pessoa.caminhouQuantosMetros += metrosCaminhados
  },

parar: function(){pessoa.andando = false},
apresentacao:function(){
 
  const anos=(pessoa.idade === 1) ? "ano": "anos"

  const metros=(pessoa.caminhouQuantosMetros <= 1) ? "metro": "metros"

  return `Olá, eu sou ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${anos}, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${metros}!`
}
}

console.log(pessoa.apresentacao())

const pessoa2 = {
  nome: 'Lidiane',
  sobrenome: 'Angelo',
  idade: 27,
  altura: 1.56,
  peso: 40,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario(){this.idade++},
  andar(metrosCaminhados){ 
    this.andando = true
    this.caminhouQuantosMetros += metrosCaminhados
  },

parar:function(){this.andando = false},
apresentacao: function(){
 
  const anos=(this.idade === 1) ? "ano": "anos"

  const metros=(this.caminhouQuantosMetros <= 1) ? "metro": "metros"

  return `Olá, eu sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`
}
}
pessoa2.andar(100)
console.log(pessoa2.apresentacao())


/*this.fazerAniversario = function () {
  return this.idade++
}

this.andar = function (metrosCaminhados) {
  pessoa.andando = true
  pessoa.caminhouQuantosMetros += metrosCaminhados
}

pessoa.parar = function () {
  pessoa.andando = false
}

pessoa.nomeCompleto = function () {
  return `Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}.`
}

pessoa.mostrarIdade = function () {
  return `Olá, eu tenho ${pessoa.idade} anos.`
}

pessoa.mostrarPeso = function () {
  return `Eu peso ${pessoa.peso}.`
}

pessoa.mostrarAltura = function () {
  return `Minha altura é ${pessoa.altura}.`
}

pessoa.mostrarDistancia = function () {
  return `${pessoa.nome} caminhou ${pessoa.caminhouQuantosMetros}m.`
}*/


// Vamos utilizar o formato ES6 para refatorar a constante pessoa.

// Quero criar as variáveis pessoa2 e pessoa3 com as mesmas propriedades, mas alterando os valores de nome, sobrenome, altura e peso






console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')

// Vamos criar a classe Pessoa

class Pessoa{
  constructor(name, surname, age, walking=false, distance=0 ){
    this.nome=name
    this.sobrenome=surname
    this.idade=age
    this.andando=walking
    this.caminhouQuantosMetros=distance
  }
  fazerAniversario(){this.idade++}
  andar(metrosCaminhados){ 
    this.andando = true
    this.caminhouQuantosMetros += metrosCaminhados
  }

parar(){
  this.andando = false
}


apresentacao() {
  const anos = (this.idade === 1) ? 'ano' : 'anos'

  const metros = (this.caminhouQuantosMetros <= 1) ? 'metro' : 'metros'

  return `Olá, eu sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`
}
}
const pessoa3 = new Pessoa('Camila', 'Marques', 24)

console.log(pessoa3.nome)

const { sobrenome } = pessoa3

console.log(sobrenome)

pessoa3.fazerAniversario()

console.log(pessoa3)

const pessoa4 = new Pessoa('Edlaine', 'Pontes', 36, true, 500)

console.log(pessoa4)


console.log('-----------------------------------------------------')
// ----------------------------------------------
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays
const lista = new Array('pera', 'uva', 'maçã')
const numbers = [9, 2, 5]


// Acessando elementos pela posição do array

console.log(lista[1])

// Informe o tamanho de cada array

console.log(numbers.length)


// Faça a desestruturação do array

const[primeiro, segundo, terceiro] = lista

console.log(primeiro)
console.log(segundo) 
console.log(terceiro) 

console.table(lista)





// Possuo 4 tias. Os dados delas estão armazenados no array de objetos dentro do arquivo db.js
// Vamos importar esses dados para podermos usá-los durante nosso exercício de revisão.
const db = require('./db')
console.log(db)

const {tias}=db
console.log(tias)



console.log('-----------------------------------------------------')
// ----------------------------------------------
// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')

// Mostre a tabela das tias pelo console.table()

console.table(tias)






console.log('-----------------------------------------------------')
console.log('filter()')
// filter
// Filtre as tias que moram em SP e mostre no console.

function filtrarTias(tia){
  return tia.local==="SP"
}
//const tiasSP=tias.filter(filtrarTias)
const tiasSP=tias.filter(tia=>tia.local==="SP")
console.table(tiasSP)


//console.log('-----------------------------------------------------')
console.log('map()')
// map
// Crie um novo array chamado tiasMaisChegadas e adicione uma propriedade chamada cuidouDeMim que recebe um valor booleano. Caso a tia teve até 2 filhos, isso significa que ela cuidou de mim e seu valor é true. Caso ela teve mais que 2 filhos, o valor da propriedade cuidouDeMim é false.

function cuidar(tia){
  if(tia.filhos<=2){
    return tia.cuidouDemim=true // cuidouDeMim é propriedade
  
}else{
  return tia.cuidouDemim=false
}
}

const tiasMaisChegadas=tias.map(cuidar)
console.log(tiasMaisChegadas)

console.log('-----------------------------------------------------')
console.log('sort()')
// SORT

// Vamos praticar o método sort() com o array numbers
// const numbers = [9, 2, 5]

const comparar = (a, b) => {
  if (a < b) { // mantendo a como primeiro e b vem depois
    return -1
  } else if (a > b) { // primeiro vem b e depois vem a
    return 1
  } else { // se a e b forem iguais, mantém a mesma ordem
    return 0
  }
}



// Refatore a função comparar e ordene numbers em ordem crescente


//numbers.sort((a, b) => a-b)
numbers.sort(comparar)
console.log(numbers)

// 9 e 2-> retornar valor positivo-> 9-2=7 positivo
//2 e 5-> retornar valor negativo-> 2-5=-3 negativo
// 2 e 2 -> retornar valor zero->2-2=0



// Ordene as tias por ordem decrescente de idade (a mais velha primeiro)

//numbers.sort((a, b) => b-a)
numbers.sort(comparar)
console.log(numbers)

// 9 e 2-> retornar valor positivo-> 9-2=7 positivo
//2 e 5-> retornar valor negativo-> 2-5=-3 negativo
// 2 e 2 -> retornar valor zero->2-2=0


function ordenarTias(a,b){
  return b.idade-a.idade
}
tias.sort(ordenarTias)
console.table(tias)



console.log('-----------------------------------------------------')
console.log('reduce()')
// reduce

// Faça a soma do array numbers
//const arrayReduzido=numbers.reduce(acumulador, item=>acumulador+item,10)

function somarTodos(acumulador, item){
  return acumulador+item
}

const arrayReduzido=numbers.reduce(somarTodos,0)// começa com 0
console.log(arrayReduzido)


// Some a quantidade de netos que vovó possui.

function somarNetos(acumulador, tia){
  return acumulador+tia.filhos
}
const netos=tias.reduce(somarNetos,0)// sempre passar o acumulador(número que se inicia: ex: 0)
console.log(netos)




// ----------------------------------------------
//console.log('-----------------------------------------------------')
//console.log('                         Fim                         ')
//console.log('-----------------------------------------------------')
