import React from 'react'
import styled from 'styled-components'
import Section1Img from '/Users/josiahcastillo/Desktop/small_projects/news_homepage_reactjs/src/assets/images/image-retro-pcs.jpg';
import Section2Img from '/Users/josiahcastillo/Desktop/small_projects/news_homepage_reactjs/src/assets/images/image-top-laptops.jpg'
import Section3Img from '/Users/josiahcastillo/Desktop/small_projects/news_homepage_reactjs/src/assets/images/image-gaming-growth.jpg'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    width: 1160px;
    margin-left: 10rem;

`;

const Section1 = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

const Section2 = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

const Section3 = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

const RetroImg = styled.img`
    width: 120px;
    
`;

const RetroImg1 = styled.img`
     width: 120px;
`;

const Info = styled.div`
    margin-right: 2rem;

    h1,
    h3,
    p {
        margin-left: 1.5rem;

    }

    h1 {
        color: #C5C6CE;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    h3{
        margin-bottom: .5rem;
        font-weight: 400;

        &:hover {
            color: #F15D51;
            cursor: pointer;
        }
    }

    p {
        line-height: 25px;
        color: #5E607A;
        font-weight: 300;
        width: 195px;
    }
    
`;

const Info3 = styled.div`
    margin-right: 2rem;

    h1,
    h3,
    p {
        margin-left: 1.5rem;

    }

    h1 {
        color: #C5C6CE;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    h3{
        margin-bottom: .5rem;
        font-weight: 400;

        &:hover {
            color: #F15D51;
            cursor: pointer;
        }
    }

    p {
        line-height: 25px;
        color: #5E607A;
        font-weight: 300;
        width: 200px;
    }
`;

const Sections = () => {
  return (
    <Container>
        <Section1>
            <RetroImg1 src={Section1Img} alt='Retro Image' />
            <Info>
                <h1>01</h1>
                <h3>Reviving Retro Pcs</h3>
                <p>What happens when old Pcs are given modern upgrades?</p>
            </Info>
        </Section1>
        <Section2>
        <RetroImg src={Section2Img} alt='Retro Image' />
            <Info>
                <h1>02</h1>
                <h3>Top 20 laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
            </Info>
        </Section2>
        <Section3>
            <RetroImg src={Section3Img} alt='' />
            <Info3>
                <h1>03</h1>
                <h3>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </Info3>
        </Section3>
    </Container>
  )
}

export default Sections