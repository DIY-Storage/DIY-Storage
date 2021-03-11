import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Loader from "../Loader";
import Item from "./Item";
import Location from "./Location";

const ALL_PRODUCT_QUERY = gql`
	query ALL_PRODUCT_QUERY {
		products: allProducts {
			id
			unitSize
			options
			price
			total
		}
	}
`;

const StorageUnitStyles = styled.div`
	height: 80em;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5rem;

	.sideBar {
		/* background-color: var(--orange); */
		max-width: 1000px;
		height: 70rem;
	}

	.items {
		max-width: 1000px;
		height: 90rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	@media (max-width: 1000px) {
		height: 90em;
		flex-direction: column;

		.sideBar {
			height: 20rem;
			width: 70%;
		}
	}
`;

function Products() {
	const { data, error, loading } = useQuery(ALL_PRODUCT_QUERY);

	if (loading) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;
	const { products } = data;
	return (
		<StorageUnitStyles>
			<div className="sideBar">
				<Location />
			</div>

			<div className="items">
				{products.map((item) => (
					<Item key={`${data.id} - item`} item={item} />
				))}
			</div>
		</StorageUnitStyles>
	);
}

export default Products;

/*
{products.map(item => {
                <Product key={data.id} item={item} />
            })}
*/
