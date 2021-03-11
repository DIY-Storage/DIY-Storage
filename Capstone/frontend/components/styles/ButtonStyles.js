import styled from "styled-components";

const ButtonStyles = styled.div`
	/* border: solid red; */
	width: 15rem;
	height: 8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--orange);
	color: black;
	text-transform: uppercase;
	transform: skew(-25deg) translateX(20%);
	border-right: 1px solid black;
	cursor: pointer;

	@media (max-width: 700px) {
		display: none;
	}
`;

export default ButtonStyles;
