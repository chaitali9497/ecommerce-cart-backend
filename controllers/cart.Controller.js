import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const cartItem = await Cart.create({
    userId: req.user.id,
    productId,
    quantity
  });

  res.status(201).json(cartItem);
};

export const updateCart = async (req, res) => {
  const cartItem = await Cart.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(cartItem);
};

export const deleteCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed from cart" });
};
