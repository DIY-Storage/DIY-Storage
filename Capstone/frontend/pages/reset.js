import React from "react";
import PasswordResetRequest from "../components/auth/PasswordResetRequest";
import Reset from "../components/auth/Reset";
import styled from "styled-components";

const ResetStyles = styled.div`
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: rgba(240, 164, 50, 0.8);
	h1 {
		font-size: 2rem;
	}
`;

function reset({ query }) {
	if (!query?.token) {
		return (
			<ResetStyles>
				<h1>Sorry you do not have a token</h1>
				<PasswordResetRequest />
			</ResetStyles>
		);
	}

	return (
		<ResetStyles>
			<Reset token={query.token} />
		</ResetStyles>
	);
}

export default reset;
