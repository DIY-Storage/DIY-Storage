import React from "react";
import Link from "next/link";
import styled from "styled-components";
import useUser from "../auth/User";

const NavStyles = styled.div`
	/* border: solid blue; */
	color: white;
	display: flex;
	justify-content: space-around;
	width: 30%;
	max-width: 500px;
	min-width: 300px;

	@media (max-width: 740px) {
		display: none;
	}
`;

function Nav() {
	const user = useUser();
	return (
		<NavStyles>
			{user ? (
				<>
					<Link href="/about">About</Link>
					<Link href="/faq">FAQ</Link>
					<Link href="/reserve">Reserve</Link>
					<Link href="/cancel">Cancel</Link>
					<Link href="/account">Account</Link>
				</>
			) : (
				<>
					<Link href="/about">About</Link>
					<Link href="/faq">FAQ</Link>
					<Link href="/reserve">Reserve</Link>
					<Link href="/cancel">Cancel</Link>
				</>
			)}
		</NavStyles>
	);
}

export default Nav;
