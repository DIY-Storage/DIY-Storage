import React from "react";
import styled from "styled-components";

const LocationStyles = styled.div`
	border: solid red;
	height: 60rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

function Location() {
	return <LocationStyles>
        <div className="filter" />
    </LocationStyles>;
}

export default Location;
