/**
 * Adds a product to the cart or increases its quantity if it already exists.
 *
 * @param {Object} chosenProduct - The product to add.
 * @param {Function} addToCart - State setter function for updating the cart - React setState
 */
export const handleAddToCart = (chosenProduct, addToCart, quantity) => {
  const productToAdd = { ...chosenProduct, quantity: quantity };

  addToCart((prevCart) => {
    const existingIndex = prevCart.findIndex(
      (product) => product.pid === productToAdd.pid
    );

    let updatedCart;
    if (existingIndex !== -1) {
      updatedCart = [...prevCart];
      updatedCart[existingIndex] = {
        ...updatedCart[existingIndex],
        quantity: updatedCart[existingIndex].quantity + quantity,
      };
    } else {
      updatedCart = [...prevCart, productToAdd];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log(updatedCart)
    return updatedCart;
  }
);
};

/**
 * Formats a number into GYD (Guyanese Dollar) currency format.
 *
 * @param {number|string} price - The numeric value to format as currency.
 * @returns {string} - The formatted price string (e.g., "GY$1,199.99").
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-GY", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
