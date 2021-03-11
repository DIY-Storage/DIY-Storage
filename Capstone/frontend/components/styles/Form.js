import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
	width: 100%;
	height: 100%;
	border-radius: 5rem;
	font-size: 1.5rem;
	font-weight: 600;
	/* line-height: 3.5rem; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h1 {
		font-size: 2rem;
	}

	label {
		/* display: block; */
		margin-bottom: 1rem;
		line-height: 4rem;
	}
	input,
	textarea,
	select {
		width: 100%;
		padding: 0.5rem;
		font-size: 1rem;
		border: 2px solid rgba(0, 0, 0, 0.54);
		&:focus {
			outline: 0;
			border-color: var(--red);
		}
	}
	button,
	input[type="submit"] {
		width: auto;
		border: 0;
		font-size: 1.2rem;
		margin-top: 1rem;
		font-weight: 600;
		padding: 0.5rem 1.2rem;
		border: solid var(--orange);
		
	}
	fieldset {
		border: 0;
		padding: 0;
		width: 70%;

		&[disabled] {
			opacity: 0.5;
		}
		&::before {
			height: 10px;
			content: "";
			display: block;
			background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
		&[aria-busy="true"]::before {
			background-size: 50% auto;
			animation: ${loading} 0.5s linear infinite;
		}
	}
`;

export default Form;
