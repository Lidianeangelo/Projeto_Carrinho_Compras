console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

let db = require('./database')

let { produtos } = db

function comparacao(a, b) {
    if (a.preco < b.preco) {
        return -1
    } else if (a.preco > b.preco) {
        return 1
    } else {
        return
    }
}

produtos.sort(comparacao)
console.table(produtos)

let readline = require("readline-sync")

let idProduto = parseInt(readline.question("Insira aqui o id do produto desejado: "))

let produtoEncontrado = produtos.find(function (produto) {
    return produto.id === idProduto
})

function buscarProduto(idProduto) {
    if (produtoEncontrado !== undefined) {
        return produtoEncontrado
    } else {
        return `Produto não encontrado`
    }
}

console.table(buscarProduto(idProduto))

let quantidadeProduto = parseInt(readline.question("Insira aqui a quantidade do produto desejado: "))


let totalCompra = produtoEncontrado.preco * quantidadeProduto
console.log(`Valor da compra:` + totalCompra.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))

let cupomDesconto = readline.question("Insira aqui seu cupom de desconto: ")

if (cupomDesconto > 0 && cupomDesconto <= 15) {
    cupomDesconto === cupomDesconto
    let descontoValor = totalCompra * (cupomDesconto / 100)

    let totalCompraDesconto = totalCompra - descontoValor

    console.log(`Seu desconto será de ${descontoValor}%. Total da compra com desconto:` + totalCompraDesconto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
} else {
    console.log("Cupom Inválido")
    console.log(`Total da compra:` + totalCompra.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
}


console.log("-------------------------------------------------------")