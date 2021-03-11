import React from 'react'
import styled from "styled-components"

const FooterStyles = styled.div`
    color: var(--offWhite);
    background: var(--gray);
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 450px) {
        font-size: 1rem;
    }
`

function Footer() {
    return (
        <FooterStyles>
            <p>All rights reserved @ DIY Storage 2021</p>
        </FooterStyles>
    )
}

export default Footer
