class ShoppingCart {
  products = []
  totalPrice = 0

  addProduct = (product) => {
    if (product.price <= 0){
      throw new Error('Invalid price')
    }
    this.products.push(product)

    let totalPrice = 0
    this.products.forEach(item => {
      totalPrice += item.price
    })
    this.totalPrice = totalPrice
  }

  removeProduct = () => []
}

const soma = (a, b) => {
  if (a %2 != 0 || b % 2 != 0){
    return null
  }
  return a + b 
}

//exporta funcoes
module.exports = {
  ShoppingCart,
  soma
}
