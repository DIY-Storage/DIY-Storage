import React from "react";
import styled from "styled-components";
import Form from "../styles/Form";
import useForm from "../../lib/useForm";
import Link from "next/link";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Error from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

/*
	TODO: NEED TO FIGURE OUT THE LOGIN ISSUE WITH THE BACKEND

*/

const SignInStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	.signinBubble {
		background: white;
		/* border: solid red; */
		width: 40rem;
		height: 40rem;
		border-radius: 1rem;
		padding: 2rem;
		max-width: 1100px;
		min-width: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.utils {
		width: 100%;
		border-radius: 5rem;
		padding: 1rem;
		display: flex;
		justify-content: space-evenly;
	}

	.btn {
		display: flex;
		button {
			float: right;
			margin-right: 1rem;
		}
	}
`;

const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION($email: String!, $password: String!) {
		authenticateUserWithPassword(email: $email, password: $password) {
			... on UserAuthenticationWithPasswordSuccess {
				item {
					id
					email
					name
				}
			}
			... on UserAuthenticationWithPasswordFailure {
				code
				message
			}
		}
	}
`;

function SignIn() {
	const { input, handleChange, resetForm } = useForm({
		email: "",
		password: "",
	});

	const [authenticateUserWithPassword, { loading, data }] = useMutation(
		SIGNIN_MUTATION,
		{
			variables: input,
			refetchQueries: [{ query: CURRENT_USER_QUERY }],
		}
	);

	const error =
		data?.authenticateUserWithPassword.__typename ===
		"UserAuthenticationWithPasswordFailure"
			? data?.authenticateUserWithPassword
			: undefined;

	async function handleSubmit(e) {
		e.preventDefault();

		await authenticateUserWithPassword();
		resetForm();
	}

	return (
		<SignInStyles>
			<div className="signinBubble">
				{/* method="POST" prevent input from going into the browser history / url [security issue] */}
				<Form method="POST" onSubmit={handleSubmit}>
					<Error error={error} />
					<h1>Sign In</h1>
					<fieldset disabled={loading}>
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
							<button type="submit">Sign In</button>
							<Link href="/recover">
								<button>Join us today!</button>
							</Link>
						</div>
					</fieldset>
				</Form>
			</div>
		</SignInStyles>
	);
}

export default SignIn;
