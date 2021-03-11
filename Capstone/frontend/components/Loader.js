import React from "react";
import styled from "styled-components";

const LoaderStyles = styled.div`
	background-color: #242f3f;
	/* background-color: var(--gray); */
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	.loader {
		display: flex;
		justify-items: center;
		align-items: center;
		color: white;
		font-size: 3rem;
		width: 10rem;
		height: 10rem;
		position: relative;
		border: 4px solid var(--orange);
		animation: loader 3s infinite ease;
	}

	.loader-inner {
		vertical-align: top;
		display: inline-block;
		width: 100%;
		background-color: var(--orange);
		animation: loader-inner 3s infinite ease-in;
	}

	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}

		25% {
			transform: rotate(180deg);
		}

		50% {
			transform: rotate(180deg);
		}

		75% {
			transform: rotate(360deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes loader-inner {
		0% {
			height: 0%;
		}

		25% {
			height: 0%;
		}

		50% {
			height: 100%;
		}

		75% {
			height: 100%;
		}

		100% {
			height: 0%;
		}
	}
`;

function Loader() {
	return (
		<LoaderStyles>
			<span className="loader">
				<span className="loader-inner">
					<h1>DIY</h1>
				</span>
				<h2>Storage</h2>
			</span>
		</LoaderStyles>
	);
}

export default Loader;
