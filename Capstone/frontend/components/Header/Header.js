import React from "react";
import styled from "styled-components";
import ButtonStyles from "../styles/ButtonStyles";
import Nav from "./Nav";
import Link from "next/link";
import useUser from "../auth/User";
import SignOut from "../auth/SignOut";
import CartButton from "../Cart/CartButton";
import Cart from "../Cart/Cart";

const HeaderStyles = styled.div`
	height: 8rem;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	background: var(--gray);
	position: fixed;

	.btns {
		display: flex;
	}
`;

const LogoStyles = styled.h1`
	color: white;
	padding: 2rem;
	margin-left: 3rem;
	cursor: pointer;
	font-family: "post_no_bill";

	h1 {
		font-size: 3.5rem;
	}

	span {
		color: var(--orange);
	}
`;

const NavStyles = styled.nav`
	position: relative;
`;

function Header() {
	const user = useUser();

	return (
		<NavStyles>
			<HeaderStyles>
				<LogoStyles>
					<Link href="/">
						<h1>
							<span>DIY</span> Storage
						</h1>
					</Link>
				</LogoStyles>
				<Nav />
				{user && (
					<div className="btns">
						<ButtonStyles>
							<CartButton />
						</ButtonStyles>
						<ButtonStyles>
							<SignOut />
						</ButtonStyles>
						<Cart />
					</div>
				)}
				{!user && (
					<Link href="/signin">
						<ButtonStyles className="uppercase">Sign in</ButtonStyles>
					</Link>
				)}
			</HeaderStyles>
		</NavStyles>
	);
}

export default Header;
