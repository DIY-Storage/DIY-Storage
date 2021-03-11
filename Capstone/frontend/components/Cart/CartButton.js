import React from "react";
import CartStyles from "../styles/CartStyles";
import { useCart } from "../../lib/cartState";

function CartButton() {
	const { cartOpen, toggleCart } = useCart();

	return (
		<button type="button" className="uppercase" onClick={toggleCart}>
			Cart
		</button>
	);
}

export default CartButton;
