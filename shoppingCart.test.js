const { ShoppingCart, soma} = require("./shoppingCart");

describe("ShoppingCart", () => {
  it("should add a new product in the list", () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.products = [
      { id: 1, price: 3 },
      { id: 2, price: 5 }
    ];
    shoppingCart.addProduct({ id: 3, price: 2 })
    expect(shoppingCart.products).toMatchObject([
      { id: 1, price: 3 },
      { id: 2, price: 5 },
      { id: 3, price: 2 }
    ]);
  });

  it("should return a error if product has price equal or less than 0", () => {
    const shoppingCart = new ShoppingCart()

    expect (shoppingCart.addProduct({id: 1, price: 0})).rejects.toThrow(new error('Invalid price'))
    
  })

  it("should remove product from the list", () => {
    const shoppingCart = new shoppingCart()

    shoppingCart.addProduct({id: 1, price: 100});
    shoppingCart.addProduct({id: 2, price: 200});

    expect(shoppingCart.removeProduct(1)).toEqual([{ id: 2, price: 200 }])
  })
});

describe.only('soma', () => {
  it ('deve retornar a soma de dois numeros', () =>{
    const a = 2;
    const b = 2;
    const result =  a + b;

    expect(soma (a, b)).toBe(result);

  })
  
  it ('Deve retonar nulo ', () =>{
    const a = 1;
    const b = 2;
    expect(soma (a, b)).toBeNull();
  })

})