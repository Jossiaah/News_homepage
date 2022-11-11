import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin-left: 10rem;
`;

const Heading = styled.div`


    
    h1 {
        font-weight: 400;
        font-size: 50px;
    }
`;

const Info = styled.div`
    width: 345px;
    margin-right: 1.5rem;
    font-weight: 300;
    color: #5E607A;
    line-height: 25px;

    p{
        margin-bottom: 2.5rem;
    }

    span {
        background-color: #F15D51;
        color: white;
        padding: 16px 35px 16px 35px;
        letter-spacing: 4px;
        font-size: 14px;

        &:hover {
            background-color: black;
            cursor: pointer;
        }
    }

`;

export const HeroText = () => {
  return (
    <Container>
        <Heading>
            <h1>The Bright <br /> Future of Web <br /> 3.0?</h1>
        </Heading>
        <Info>
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its purpose?</p>
            <span>READ MORE</span>
        </Info>
    </Container>
  )
}

export default HeroText;
