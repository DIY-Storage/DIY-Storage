import React from "react";
import Form from "../styles/Form";
import useForm from "../../lib/useForm";
import styled from "styled-components";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./User";

const PasswordResetStyles = styled.div`
	.passwordBubble {
		background: white;
		border-radius: 1rem;
		padding: 2rem;
		width: 40rem;
		height: 40rem;
		max-width: 1100px;
		min-width: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;

const REQUEST_RESET_MUTATION = gql`
	mutation REQUEST_RESET_MUTATION($email: String!) {
		passwordReset: sendUserPasswordResetLink(email: $email) {
			code
			message
		}
	}
`;

function PasswordResetRequest() {
	const { input, handleChange, resetForm } = useForm({
		email: "",
	});

	const [passwordReset, { loading, data }] = useMutation(
		REQUEST_RESET_MUTATION,
		{
			variables: input,
			refetchQueries: [{ query: CURRENT_USER_QUERY }],
		}
	);

	async function handleSubmit(e) {
		e.preventDefault();
		await passwordReset().catch(console.error);
		resetForm();
	}

	return (
		<PasswordResetStyles>
			<div className="passwordBubble">
				<Form method="POST" onSubmit={handleSubmit}>
					<h1>Password Reset</h1>
					<fieldset>
						{data?.passwordReset === null && <p>Success! Check your email!</p>}
						<label>Email</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							autoComplete="email"
							value={input.email}
							onChange={handleChange}
						/>
						<button type="submit">Reset</button>
					</fieldset>
				</Form>
			</div>
		</PasswordResetStyles>
	);
}

export default PasswordResetRequest;
