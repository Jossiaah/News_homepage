import React from 'react'
import styled from 'styled-components'
import MyImage from '/Users/josiahcastillo/Desktop/small_projects/news_homepage_reactjs/src/assets/images/logo.svg'


const Container = styled.div`
    padding: 80px;
    margin-top: 2rem;
`;
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Logo = styled.img`
    height: 50px;

`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
const NavLinks = styled.div`
    margin-left: 25px;
`;

const Header = () => {
  return (
    <Container>
        <Nav>
            <Logo src={MyImage} alt='' />
            <Wrapper>
                <NavLinks>Home</NavLinks>
                <NavLinks>Home</NavLinks>
                <NavLinks>Home</NavLinks>
                <NavLinks>Home</NavLinks>
                <NavLinks>Home</NavLinks>
            </Wrapper>
        </Nav>
    </Container>
  )
}

export default Header