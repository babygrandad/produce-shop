const CartApi = {
  getCart: () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  },

  setCart: (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  },

  addItem: (product) => {
    const cart = CartApi.getCart();
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1)
    {
      cart[existingProductIndex].quantity += 1;
    } 
    else
    {
      cart.push({ ...product, quantity: 1 });
    }
    CartApi.setCart(cart);
  },

  removeItem: (productId) => {
    const cart = CartApi.getCart();

    const updatedCart = cart.filter((item) => item.id !== productId);

    CartApi.setCart(updatedCart);
  },

  updateItemQuantity: (productId, quantity) => {
    const cart = CartApi.getCart();

    const productIndex = cart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      cart[productIndex].quantity = quantity;
    }

    CartApi.setCart(cart);
  },

  clearCart: () => {
    CartApi.setCart([]);
  },
};

export default CartApi;
