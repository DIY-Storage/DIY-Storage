import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ButtonStyles from "../styles/ButtonStyles";

const BannerStyles = styled.div`
	/* border: solid red; */
	height: 50rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("https://res.cloudinary.com/junworks/image/upload/v1614618219/DIY%20Garage/storage_ttw5ls.png");

	h1 {
		height: 15rem;
		font-size: 7rem;
		color: white;
		font-family: "post_no_bill";
		span {
			color: var(--orange);
			font-size: 10rem;
		}
	}

	h3 {
		font-size: 3rem;
		color: white;
		z-index: 2;
	}

	button {
		width: 12rem;
		height: 5rem;
		background: var(--orange);
		border-radius: 1rem;
	}

	@media (max-width: 700px) {
		h1 {
			font-size: 4rem;
		}

		h3 {
			font-size: 2rem;
		}

		button {
			width: 8rem;
			height: 3rem;
			font-size: 1rem;
		}
	}

	@media (max-width: 450px) {
		h1 {
			font-size: 2rem;
		}

		h3 {
			font-size: 1.5rem;
		}
	}
`;

function Banner() {
	return (
		<>
			<div>
				<BannerStyles>
					<h1>
						<span>DIY</span> Storage
					</h1>
					<h3>
						Honest <span> - </span> Convenient <span> - </span> Secure
					</h3>
					<Link href="/reserve">
						<button>Reserve</button>
					</Link>
				</BannerStyles>
			</div>
		</>
	);
}

export default Banner;
