import React from "react";
import Form from "../styles/Form";
import useForm from "../../lib/useForm";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import { useMutation } from "@apollo/client";

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const SignUpStyles = styled.div`
	width: 45%;
	margin-top: 5rem;
	max-width: 900px;

	.signinBubble {
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

const FormStyles = styled.div`
	width: 90%;
`;

const SIGNUP_MUTATION = gql`
	mutation SIGNUP_MUTATION(
		$username: String!
		$email: String!
		$password: String!
		$name: String!
		$address: String!
		$city: String!
		$state: String!
		$zipcode: Int
		$phone: String!
		$driverLic: String!
	) {
		createUser(
			data: {
				username: $username
				email: $email
				password: $password
				name: $name
				address: $address
				city: $city
				state: $state
				zipcode: $zipcode
				phone: $phone
				driverLic: $driverLic
			}
		) {
			id
			email
			username
		}
	}
`;
function SignUp() {
	const { input, handleChange, resetForm } = useForm({
		username: "",
		email: "",
		password: "",
		name: "",
		address: "",
		city: "",
		state: "",
		zipcode: 0,
		phone: 0,
		driverLic: "",
	});

	const [createUser, { loading, data, error }] = useMutation(SIGNUP_MUTATION, {
		variables: input,
	});
	async function handleSubmit(e) {
		e.preventDefault();

		await createUser().catch(console.error);
		resetForm();
	}

	console.log({ data });

	return (
		<SignUpStyles>
			<div className="signinBubble">
				<h1>Sign up</h1>
				<form method="POST" onSubmit={handleSubmit}>
					<Error error={error} />
					<fieldset>
						{data?.createUser && (
							<p>
								Sign up successful! Welcome -{" "}
								<span>{data.createUser.username}</span> - Please sign in to
								access your account!
							</p>
						)}
						<label>username</label>
						<input
							type="text"
							name="username"
							placeholder="username"
							value={input.username}
							onChange={handleChange}
						/>

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

						<label>name</label>
						<input
							type="text"
							name="name"
							placeholder="name"
							value={input.realname}
							onChange={handleChange}
						/>

						<label>address</label>
						<input
							type="text"
							name="address"
							placeholder="address"
							value={input.address}
							onChange={handleChange}
						/>

						<label>city</label>
						<input
							type="text"
							name="city"
							placeholder="city"
							value={input.city}
							onChange={handleChange}
						/>

						<label>state</label>
						<input
							type="text"
							name="state"
							placeholder="state"
							value={input.state}
							onChange={handleChange}
						/>

						<label>Zip Code</label>
						<input
							type="number"
							name="zipcode"
							value={Number(input.zipcode).toString()}
							onChange={handleChange}
						/>

						<label>Phone</label>
						<input
							type="text"
							name="phone"
							value={Number(input.phone).toString()}
							placeholder="(XXX) XXX-XXXX"
							onChange={handleChange}
						/>

						<label>Driver's License</label>
						<input
							type="text"
							name="driverLic"
							placeholder="Driver's License"
							value={input.driverLic}
							onChange={handleChange}
						/>

						<div className="btn">
							<button type="submit">Sign Up</button>
							<Link href="/signin">
								<button>Login</button>
							</Link>
						</div>
					</fieldset>
				</form>
			</div>
		</SignUpStyles>
	);
}

export default SignUp;
