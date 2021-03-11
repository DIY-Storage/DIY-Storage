import React from "react";
import styled, { keyframes } from "styled-components";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import useForm from "../../lib/useForm";
import Link from "next/link";
import Error from "../ErrorMessage";

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const PasswordResetStyles = styled.div`
	width: 45%;
	margin-top: 5rem;
	max-width: 400px;

	.resetBubble {
		background: white;
		padding: 3rem;
		border-radius: 1rem;
		max-width: 1100px;
		min-width: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 2rem;

		fieldset {
			display: flex;
			flex-direction: column;
			&[disabled] {
				opacity: 0.5;
			}
			&::before {
				height: 10px;
				content: "";
				display: block;
				background-image: linear-gradient(
					to right,
					#ff8177 0%,
					#ff867a 0%,
					#ff8c7f 21%,
					#f99185 52%,
					#cf556c 78%,
					#b12a5b 100%
				);
				&[aria-busy="true"]::before {
					background-size: 50% auto;
					animation: ${loading} 0.5s linear infinite;
				}
			}

			input,
			select {
				border: 2px solid rgba(0, 0, 0, 0.54);
			}
		}
	}

	.btn {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
		cursor: pointer;

		button {
			float: right;
			border: solid var(--orange);
			padding-left: 5rem;
			padding-right: 5rem;
			margin-right: 1rem;
		}
	}

	span {
		color: var(--orange);
	}

	@media (max-width: 1100px) {
		button {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}

	@media (max-width: 1000px) {
		.btn {
			flex-direction: column;
			button {
				margin-top: 2rem;
			}
		}
	}
`;
const RESET_MUTATION = gql`
	mutation RESET_MUTATION(
		$email: String!
		$token: String!
		$password: String!
	) {
		reset: redeemUserPasswordResetToken(
			email: $email
			token: $token
			password: $password
		) {
			code
			message
		}
	}
`;

function Reset({ token }) {
	const { input, handleChange, resetForm } = useForm({
		email: "",
		password: "",
		token,
	});

	const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
		variables: input,
	});

	const successfulError = data?.reset?.code ? data?.reset : undefined;

	async function handleSubmit(e) {
		e.preventDefault();

		// Send the email and password to graphql API
		const res = await reset().catch(console.error);
		console.log(res);
		console.log({ data, loading, error });
		resetForm();
	}
	return (
		<PasswordResetStyles>
			<div className="resetBubble">
				<h1>Reset Password</h1>
				<form method="POST" onSubmit={handleSubmit}>
					<Error error={error || successfulError} />
					<fieldset>
						{data?.reset === null && <p>Success! You can now sign in</p>}
						<label>Email</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							autoComplete="email"
							value={input.email}
							onChange={handleChange}
						/>

						<label>Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={input.password}
							onChange={handleChange}
						/>
						<div className="btn">
							<button type="submit">Password reset</button>
						</div>
					</fieldset>
				</form>
			</div>
		</PasswordResetStyles>
	);
}

export default Reset;
