export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  }

  return cartItems.map(item =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
