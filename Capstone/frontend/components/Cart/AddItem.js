import React from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "../auth/User";

const ADD_TO_CART_MUTATION = gql`
	mutation ADD_TO_CART_MUTATION($id: ID!) {
		addToCart(productId: $id) {
			id
		}
	}
`;

function AddItem({ id }) {
	const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
		variables: { id },
		refetchQueries: [{ query: CURRENT_USER_QUERY }],
	});

	return (
		<button onClick={addToCart} disabled={loading}>
			Reserve
		</button>
	);
}

export default AddItem;
