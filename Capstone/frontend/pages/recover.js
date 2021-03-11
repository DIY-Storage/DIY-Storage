import React from "react";
import SignUp from "../components/auth/SignUp";
import styled from "styled-components";

const RecoverInfoStyles = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	/* background: var(--orange); */
	background-color: rgba(240, 164, 50, 0.8);
`;

function recover() {
	return (
		<RecoverInfoStyles>
			<SignUp />
		</RecoverInfoStyles>
	);
}

export default recover;
