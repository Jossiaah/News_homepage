import React from 'react'
import styled from 'styled-components';
import Image from '/Users/josiahcastillo/Desktop/small_projects/news_homepage_reactjs/src/assets/images/image-web-3-desktop.jpg'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

const MainImg = styled.img`
    width: 780px;
    height: 315px;
    margin-left: 158px;
`;

const New = styled.div`
    margin-right: 150px;
    padding: 20px;
    width: 290px;
    height: 480px;
    background-color: black;
    color: white;

    h1 {
        color: #E9AA52;
        font-weight: 400;
    }
    
`;

const Section1 = styled.div`
    
`;

const Section2 = styled.div`
    
`;

const Section3 = styled.div`
    
`;

export const Hero = () => {
  return (
    <Container>
        <MainImg src={Image} alt='' />
        <New>
            <Section1>
                <h1>New</h1>
                <h3>Hydrogen VS Electric Cars</h3>
                <p>Will</p>
            </Section1>
            <Section2></Section2>
            <Section3></Section3>
        </New>
    </Container>
  )
}

export default Hero;
