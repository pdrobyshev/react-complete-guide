import React from "react";
import styled from "styled-components";
// import './Person.css';

const StyledDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            padding: 16px;
            text-align: center;
            border: 1px solid #eeeeee;
            box-shadow: 0 2px 3px #ccc;
            
            @media (min-width: 500px) {
                width: 450px;
            }
        `;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    );
};

export default person;
