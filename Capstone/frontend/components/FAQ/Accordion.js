import React, { useState } from 'react'
import styled from "styled-components"
import data from "../../questions.json"
import {BsArrowBarDown, BsArrowBarUp} from "react-icons/bs"


const AccordionWrapper = styled.div`
    height: 60em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AccordionFormStyles = styled.form`
    max-width: 1000px;
    h1 {
        font-size: 1.2rem;
        margin: 0;
    }

    p {
        font-size: 1.2rem;
    }

    button {
        display: flex;
        align-items: center;
        background:var(--grey);
        border: none;
        font-size: 1.2rem;
        width: 100%;
        text-align: left;
        color: white;
        font-weight: bold;
        margin-top: 0.5rem;
        padding: 1rem;
    }

    button.active {
        background-color: var(--orange);
        color: black;
        border: var(--orange) solid 1px;
    }

    button:hover {
        background-color: var(--orange);
    }

    .title-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: 100%;
    }

    .arrow-up, .arrow-down {
        font-size: 2.5rem;
    }

    .panel-close {
        background: #e0e0e0;
        box-sizing: border-box;
        padding: 0.5rem 1rem 0 1rem;
        opacity: 0;
        width: 100%;
        height: 0;
        overflow: hidden;
        transition-timing-function: ease-out;
        transition: all 1s;
    }

    .panel-open {
        overflow: hidden;
        background:#e0e0e0;
        padding: 1.5rem;
        margin-bottom: 1rem;
        box-sizing: border-box;
        opacity: 1;
        width: 100%;
        height: auto;
        transition-timing-function: ease-in;
        transition: all 1s;
    }

    .panel p {
        margin: 0;
    }

    @media(max-width: 1000px) {
        width: 50rem;
    }

    @media(max-width: 600px) {
        width: 35rem;
    }

    @media(max-width: 500px) {
        width: 30rem;
        margin-top: 5rem;

        h1 {
            font-size: 1rem;
        }
        
        p {
            font-size: 1rem;
        }
    }

`

function Accordion() {

    let indexPlus;

    const [active, setActive] = useState(0);

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    return (
        <AccordionWrapper>
                <AccordionFormStyles>
                    {data.map((item, index) => (
                        <div key={index}>
                        <h3>
                            <button 
                                onClick={(e) => eventHandler(e, index)}
                                className={ active === index ? 'active' : 'inactive'}
                                aria-expanded={ active === index ? 'true' : 'false' }
                                aria-controls={ 'sect-' + indexCount(index) }
                                aria-disabled={ active === index ? 'true' : 'false' }
                                tabIndex={indexCount(index)}
                            >
                                <h1 className="title-wrapper">{item.question}
                                    { active === index  ? <BsArrowBarDown className="arrow-down" /> : <BsArrowBarUp className="arrow-up" />}
                                </h1>  
                            </button>
                        </h3>
                        <div id={ 'sect-' + indexCount(index) } className={ active === index  ? 'panel-open' : 'panel-close' }>
                             <p>{item.answer}</p>
                        </div>
                    </div>
                    ))}
                </AccordionFormStyles>
        </AccordionWrapper>
    )
}

export default Accordion
