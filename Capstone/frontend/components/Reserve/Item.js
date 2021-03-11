import React from "react";
import styled from "styled-components";
import AddItem from "../Cart/AddItem";

const ItemStyles = styled.div`
	border: solid var(--orange);
	background-color: rgba(205, 205, 205, 0.6);
	max-width: 1500px;
	.cardWrapper {
		margin: 1rem;
	}

	.section {
		display: flex;
		justify-content: space-between;
	}

	button {
		width: 10rem;
		height: 4rem;
		background: var(--orange);
		float: right;
		margin: 1rem;
	}

	@media (max-width: 700px) {
		width: 50rem;

		.cardWrapper {
			font-size: 1.2rem;
		}

		button {
			width: 8rem;
			height: 3rem;
			font-size: 1rem;
		}
	}

	@media (max-width: 550px) {
		width: 30rem;

		.cardWrapper {
			font-size: 1.2rem;
		}

		button {
			width: 6rem;
			height: 3rem;
			font-size: 1rem;
		}
	}
`;

function Item(item) {
	console.log(item);
	const { id, options, price, total, unitSize } = item.item;
	return (
		<>
			<ItemStyles>
				<div className="cardWrapper">
					<div className="section">
						<h1>Size: {unitSize} </h1>
						<p>${price}</p>
					</div>
					<p>Features: {options}</p>
					<AddItem id={id} />
				</div>
			</ItemStyles>
		</>
	);
}

export default Item;
