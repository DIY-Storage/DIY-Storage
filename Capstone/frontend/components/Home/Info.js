import React from "react";
import styled from "styled-components";

const InfoStyles = styled.div`
	/* border: solid green; */
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 5rem;
	/* height: 70vh; */

	.card {
		max-width: 1000px;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 2rem;
		/* background: url("https://res.cloudinary.com/junworks/image/upload/v1614879762/DIY%20Garage/webb_edyckt.png"); */
	}

	.info {
		/* border: solid blue; */
		width: 70%;
		padding: 10rem;
		h1 {
			text-transform: uppercase;
			font-size: clamp(1.5rem, 2vw, 2rem);
		}

		p {
			font-size: clamp(1rem, 2vw, 1.3rem);
		}
	}

	.photo {
		width: 30%;
		display: flex;
		justify-content: center;

		img {
			height: 35rem;
			object-fit: contain;
		}
	}
`;

function Info() {
	return (
		<InfoStyles>
			<div className="card">
				<div className="info">
					<h1>Built with you in mind</h1>
					<p>
						We built our facility with safety, and security in mind so you don't
						have to worry about it when you store your personal belongings in
						our facility.
					</p>
				</div>
				<div className="photo">
					<img
						src="https://res.cloudinary.com/junworks/image/upload/v1614903869/DIY%20Garage/warehouse_rddfi7.png"
						alt="storage"
					/>
				</div>
			</div>
		</InfoStyles>
	);
}

export default Info;
