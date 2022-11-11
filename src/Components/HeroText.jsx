import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 350px;
    margin-left: 10rem;
`;

const Heading = styled.div`
    
    h1 {
        font-weight: 400;
        font-size: 50px;
    }
`;

const Info = styled.div`
    
`;

export const HeroText = () => {
  return (
    <Container>
        <Heading>
            <h1>The Bright <br /> Future of Web <br /> 3.0?</h1>
        </Heading>
        <Info>

        </Info>
    </Container>
  )
}

export default HeroText;
