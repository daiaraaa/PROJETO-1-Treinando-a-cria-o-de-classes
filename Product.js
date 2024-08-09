class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0

    }

    addToSock(quantidade) {
        this.inStock += quantidade
    }

    calculateDiscount(discountPercentage) {
        const discountAmount = this.price * (discountPercentage / 100)
        return this.price - discountAmount
    }
}

const desconto = new Product("Notebook", "Notebook Samsung Galaxy Book2", 2189.00)
desconto.addToSock(10)

console.log(`Nome do produto: ${desconto.name}`)
console.log(`Descrição do produto: ${desconto.description}`)
console.log(`Valor do produto: R$${desconto.price.toFixed(2)}`)
console.log(`Quantidade no estoque: ${desconto.inStock}`)
const discount = 5
const novopreco = desconto.calculateDiscount(discount)
console.log(`Desconto no produto: ${discount}%`)
console.log(`Novo valor do produto: R$${novopreco.toFixed(2)}`)