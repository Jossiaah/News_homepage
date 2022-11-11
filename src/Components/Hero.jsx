import React from 'react'
import styled from 'styled-components';
import Image from '/Users/josiahcastillo/Desktop/small_projects/news_homepage_reactjs/src/assets/images/image-web-3-desktop.jpg'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: -120px;
    
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
    height: 420px;
    background-color: black;
    color: white;

`;

const Section1 = styled.div`
     h1 {
        color: #E9AA52;
        font-weight: 400;
        margin-bottom: 1.5rem;
    }

    h3 {
        font-weight: 300;
        margin-bottom: .5rem;

        &:hover {
            color: #E9AA52;
            cursor: pointer;
        }
    }

    p {
        font-weight: 100;
        line-height: 25px;
        margin-bottom: 1.5rem;
    }

    hr {
        border: .5px solid #5E607A;
        margin-bottom: 1.5rem;
    }
    
    
`;

const Section2 = styled.div`
    h3 {
        font-weight: 300;
        margin-bottom: .5rem;

        &:hover {
            color: #E9AA52;
            cursor: pointer;
        }
    }

    p {
        font-weight: 100;
        line-height: 25px;
        margin-bottom: 1.5rem;
    }

    hr {
        border: .5px solid #5E607A;
    }
    
    
`;

const Section3 = styled.div`
    h3 {
        font-weight: 300;
        margin-bottom: .5rem;
        margin-top: 1.5rem;

        &:hover {
            color: #E9AA52;
            cursor: pointer;
        }
    }

    p {
        font-weight: 100;
        line-height: 25px;
        margin-bottom: 1.5rem;
    }
`;

export const Hero = () => {
  return (
    <Container>
        <MainImg src={Image} alt='' />
        <New>
            <Section1>
                <h1>New</h1>
                <h3>Hydrogen VS Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to Evs?</p>
                <hr />
            </Section1>
            <Section2>
                <h3>The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
                <hr />
            </Section2>
            <Section3>
                <h3>Is VC Funding Drying Up?</h3>
                <p> Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </Section3>
        </New>
    </Container>
  )
}

export default Hero;
