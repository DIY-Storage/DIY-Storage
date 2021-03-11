import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./Header/Footer";
import Loader from "./Loader";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'post_no_bill';
        src: url('/custom/postnobillscolombo-bold.ttf');
        font-weight: normal;
        font-style: normal;
    }


    :root {
        --red: #ff0000;
        --black: #393939;
        --grey: #3A3A3A;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(---lightGray);
        --offWhite: #ededed;
        --orange: #F0A432;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
        box-sizing: border-box;
        /* font-size: 10px; */
        font-size: 62.5%;
    }


    *, *:before, *:after {
    box-sizing: inherit;
    }


    body {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        overflow-x: hidden;
        background-color: #dcdce0;
        /* position: relative; */
    }

    
    a {
        text-decoration: none;
        color: var(---black);
    }
    a:hover {
        text-decoration: underline;
    }
    
    button {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
        cursor: pointer;
        
    }
`;

const InnerStyles = styled.div`
	/* max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 2rem; */
`;

function Page({ children }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 3000);
	}, []);

	return (
		<>
			<GlobalStyles />
			{loading === false ? (
				<Loader />
			) : (
				<>
					<Header />
					<InnerStyles>{children}</InnerStyles>
					<Footer />
				</>
			)}
		</>
	);
}

export default Page;

Page.protoType = {
	children: PropTypes.any,
	/*
    children: PropTypes.oneOf([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
    */
};

/*
{loading === false ? (
				<Loader />
			) : (
				<>
					<Header />
					<InnerStyles>{children}</InnerStyles>
					<Footer />
				</>
			)}

*/
