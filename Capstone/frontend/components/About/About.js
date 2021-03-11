import React from "react";
import styled from "styled-components";

const AboutStyles = styled.div`
	height: 60em;
	display: grid;
	justify-content: center;
	align-items: center;
	@media (max-width: 700px) {
		height: 70em;
	}
`;

const Bio = styled.div`
	max-width: 1000px;
	display: grid;
	/* grid-template-columns: 1fr 1fr; */
	grid-template-areas: "photo bio";

	.photo {
		grid-area: photo;
		justify-self: end;
		align-self: center;
		img {
			height: 20em;
		}
	}

	.bio {
		grid-column: 2 / -1;
		justify-self: center;
		align-self: center;
		font-size: 1.2rem;
		padding: 1rem;

		h1 {
			font-size: 2rem;
		}

		span {
			color: var(--orange);
		}
	}

	@media (max-width: 700px) {
		grid-template-areas:
			"photo"
			"bio";

		.photo {
			grid-area: photo;
			justify-self: center;
			align-self: center;
			img {
				height: 20rem;
			}
		}

		.bio {
			grid-area: bio;
			justify-self: center;
			align-self: center;
			margin: 3rem;
			padding: 4rem;
		}
	}
`;

const LocationStyles = styled.div`
	display: grid;
	grid-template-areas: "about location";
	align-items: center;

	.about {
		grid-area: about;
		justify-self: center;
		align-self: center;
	}

	.location {
		grid-area: location;
		width: 35rem;
		object-fit: contain;
		justify-self: center;
	}

	@media (max-width: 700px) {
		grid-template-areas: "location" "about";

		.about {
			font-size: 1.2rem;
			margin-left: 2rem;
		}

		.location {
			width: 28rem;
			margin-bottom: 2rem;
		}
	}
`;

function About() {
	return (
		<AboutStyles>
			<Bio>
				<div className="photo">
					<img
						src="https://res.cloudinary.com/junworks/image/upload/v1614618234/DIY%20Garage/Person_qkxrzy.png"
						alt="photo"
					/>
				</div>
				<div className="bio">
					<h1>
						Hi! My name is <span>Kirk</span>!
					</h1>
					<p>
						Raised here in Elkhorn we are proud to do business in this thriving
						well grounded mid-west community. We are certain we will provide the
						customer service you expect from a small town business.
						<br />
						Let us prove it to you!
					</p>
				</div>
			</Bio>

			<LocationStyles>
				<div className="about">
					<p>
						22101 West Maple Rd
						<br />
						Omaha, NE 68022
						<br />
						Phone: 402-289-5099
						<br />
						diystorage@yahoo.com
						<br />
						Hours: Mon - Fri: 8AM - 5PM | Sat: 9AM - 2PM
					</p>
				</div>
				<div className="location">
					<img
						src="https://res.cloudinary.com/junworks/image/upload/v1614618238/DIY%20Garage/omaha_qmd9dd.png"
						alt="omaha"
					/>
				</div>
			</LocationStyles>
		</AboutStyles>
	);
}

export default About;
