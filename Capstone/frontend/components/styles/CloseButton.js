import styled from "styled-components";

const CloseButton = styled.button`
	font-size: 3rem;
	border: 0;
	position: absolute;
	margin-right: 2rem;
	margin-top: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 4rem;
	width: 4rem;
	z-index: 2;
	right: 0;
	&:focus {
		outline: 0 !important;
	}
`;

export default CloseButton;
