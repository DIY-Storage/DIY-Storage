import React from "react";
import gql from "graphql-tag";
import Error from "../../components/ErrorMessage";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "../auth/User";

const DELETE_ITEM_MUTATION = gql`
	mutation DELETE_ITEM_MUTATION($id: ID!) {
		deleteCartItem(id: $id) {
			quantity
		}
	}
`;

function DeleteItem({ id }) {
	const [deleteCartItem, { loading, error }] = useMutation(
		DELETE_ITEM_MUTATION,
		{
			variables: { id },
			refetchQueries: [{ query: CURRENT_USER_QUERY }],
		}
	);
	return (
		<div>
			<Error error={error} />
			<button type="button" onClick={deleteCartItem} disabled={loading}>
				&times;
			</button>
		</div>
	);
}

export default DeleteItem;
