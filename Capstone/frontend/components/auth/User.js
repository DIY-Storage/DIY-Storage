import { gql, useQuery } from "@apollo/client";

export const CURRENT_USER_QUERY = gql`
	query {
		authenticatedItem {
			... on User {
				id
				name
				username
				email
				driverLic
				address
				city
				state
				zipcode
				phone
				driverLic
				cart {
					id
					quantity
					product {
						id
						unitSize
						price
					}
				}
			}
		}
	}
`;

function useUser() {
	const { data } = useQuery(CURRENT_USER_QUERY);
	return data?.authenticatedItem;
}

export default useUser;
