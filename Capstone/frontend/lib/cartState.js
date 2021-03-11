import { useState, useContext, createContext } from "react";

const LocalStateContext = createContext();

const LocalStateProvider = LocalStateContext.Provider;

function useCart() {
	const all = useContext(LocalStateContext);
	return all;
}

function CartStateProvider({ children }) {
	const [cartOpen, setCartOpen] = useState(false);

	function toggleCart() {
		setCartOpen(!cartOpen);
	}

	function closeCart() {
		setCartOpen(false);
	}

	return (
		<LocalStateProvider value={{ cartOpen, toggleCart, closeCart }}>
			{children}
		</LocalStateProvider>
	);
}

export { CartStateProvider, useCart };
