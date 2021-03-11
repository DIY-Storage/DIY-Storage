import React from "react";
import styled from "styled-components";

const FeatureStyles = styled.div`
	height: 70em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5rem;

	h2 {
		font-size: 3rem;
	}

	span {
		color: var(--orange);
	}

	@media (max-width: 1130px) {
		height: 80em;

		h2 {
			font-size: 2rem;
		}
	}

	@media (max-width: 450px) {
		height: 100em;
	}
`;

const Card = styled.div`
	max-width: 1000px;
	height: 100%;
	display: grid;
	justify-content: space-evenly;
	align-items: center;
	margin: 8rem;

	@media (max-width: 1130px) {
		width: 100% !important;
		margin: 1rem;
	}
`;

const CardStyles = styled.div`
	/* border: solid green; */
	display: grid;
	grid-template-areas:
		"photo title"
		"photo info";

	margin-top: 5rem;

	span {
		color: var(--orange);
	}

	.photo {
		grid-area: photo;
		margin-right: 1rem;
		border-radius: 1rem;
		img {
			border-radius: 2rem;
			height: 20rem;
			object-fit: contain;
			margin-left: 5rem;
		}
	}

	.title {
		grid-area: title;
		width: 50%;
		align-self: flex-end;
		margin-bottom: 2rem;
		margin-left: 2rem;
		h1 {
			font-size: 2rem;
		}
	}

	.info {
		grid-area: info;
		width: 70%;
		margin-left: 2rem;
	}

	@media (max-width: 1130px) {
		justify-items: center;
		align-items: center;
		grid-template-areas:
			"photo photo"
			"photo photo"
			"title title"
			"info  info";

		.photo {
			img {
				margin-left: 0.5rem;
			}
		}

		.title {
			text-align: center;
			font-size: 1rem;
			margin-left: 0;
			margin-bottom: 1rem;
		}

		.info {
			text-align: center;
			font-size: 1.2rem;
			margin-left: 0;
			width: 50%;
		}
	}
`;

const CardStylesReverse = styled.div`
	display: grid;
	grid-template-areas:
		"title photo"
		"info photo";

	margin-top: 5rem;

	span {
		color: var(--orange);
	}

	.photo {
		grid-area: photo;
		margin-right: 1rem;
		border-radius: 1rem;
		img {
			border-radius: 2rem;
			height: 20rem;
			object-fit: contain;
			margin-left: 5rem;
		}
	}

	.title {
		grid-area: title;
		width: 50%;
		align-self: flex-end;
		margin-bottom: 2rem;
		margin-left: 7rem;

		h1 {
			font-size: 2rem;
		}
	}

	.info {
		grid-area: info;
		width: 70%;
		margin-left: 7rem;
	}

	@media (max-width: 1130px) {
		/* border: solid red; */
		justify-items: center;
		align-items: center;
		grid-template-areas:
			"photo photo"
			"photo photo"
			"title title"
			"info  info";

		.photo {
			img {
				margin-left: 0.5rem;
			}
		}

		.title {
			text-align: center;
			font-size: 1rem;
			margin-left: 0;
			margin-bottom: 1rem;
		}

		.info {
			text-align: center;
			font-size: 1.2rem;
			margin-left: 0;
			width: 50%;
		}
	}
`;

function Features() {
	return (
		<FeatureStyles>
			<h2>
				Why you should use <span>DIY Storage</span>
			</h2>
			<Card>
				<CardStyles>
					<div className="photo">
						<img
							src="https://res.cloudinary.com/junworks/image/upload/v1614618227/DIY%20Garage/security_gz3bmj.png"
							alt="cam"
						/>
					</div>
					<div className="title">
						<h1>
							<span>High level</span> survillance{" "}
						</h1>
					</div>
					<div className="info">
						<p>
							We offers high level security services such motion sensor security
							cameras and secured gateway access to keep your belongings safe.{" "}
						</p>
					</div>
				</CardStyles>

				{/*  ---------------- */}

				<CardStylesReverse>
					<div className="photo">
						<img
							src="https://res.cloudinary.com/junworks/image/upload/v1614618231/DIY%20Garage/phone_xzu7ir.png"
							alt="phone"
						/>
					</div>
					<div className="title">
						<h1>
							<span>Easy</span> Access
						</h1>
					</div>
					<div className="info">
						<p>
							Access your storage unit any time during the day with easy access
							app you can find in the apple store or google play store.{" "}
						</p>
					</div>
				</CardStylesReverse>

				{/*  ---------------- */}

				<CardStyles>
					<div className="photo">
						<img
							src="https://res.cloudinary.com/junworks/image/upload/v1614618224/DIY%20Garage/sharing_ycnva7.png"
							alt="share"
						/>
					</div>
					<div className="title">
						<h1>
							<span>Share</span> Unit
						</h1>
					</div>
					<div className="info">
						<p>
							Our easy access system allow our clients to share unit with
							multiple users while tracking access seperately.
						</p>
					</div>
				</CardStyles>
			</Card>
		</FeatureStyles>
	);
}

export default Features;
