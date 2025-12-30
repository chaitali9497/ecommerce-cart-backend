import Cart from "../models/Cart.js";
//when user adds item to cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const cartItem = await Cart.create({
    userId: req.user.id,
    productId,
    quantity
  });

  res.status(201).json(cartItem);
};

//when user updates item quantity in cart
export const updateCart = async (req, res) => {
  const cartItem = await Cart.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(cartItem);
};

//when user remove or deletes item from cart
export const deleteCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed from cart" });
};
