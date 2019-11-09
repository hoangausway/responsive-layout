import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    'sidenav header'
    'sidenav main'
    'sidenav footer';
  height: 100vh;
`

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #648ca6;
`

const StyledSideNav = styled.aside`
  grid-area: sidenav;
  display: flex; /* Will be hidden on mobile */
  flex-direction: column;
  background-color: #394263;
`
const StyledMain = styled.main`
  grid-area: main;
  background-color: #8fd4d9;
`
const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #648ca6;
`
const StyledHeaderSearch = styled.div``
const StyledHeaderAvatar = styled.div``
const StyledFooterCopyright = styled.div``
const StyledFooterSignature = styled.div``

const StyledSideNavList = styled.ul`
  padding: 0;
  margin-top: 85px;
  list-style-type: none;
`

const StyledSideNavListItem = styled.li`
  padding: 20px 20px 20px 40px;
  color: #ddd;
`

function App () {
  return (
    <StyledLayout>
      <StyledHeader>
        <StyledHeaderSearch>Search...</StyledHeaderSearch>
        <StyledHeaderAvatar>Your face</StyledHeaderAvatar>
      </StyledHeader>
      <StyledSideNav>
        <StyledSideNavList>
          <StyledSideNavListItem>Item one</StyledSideNavListItem>
          <StyledSideNavListItem>Item two</StyledSideNavListItem>
          <StyledSideNavListItem>Item three</StyledSideNavListItem>
          <StyledSideNavListItem>Item four</StyledSideNavListItem>
          <StyledSideNavListItem>Item five</StyledSideNavListItem>
        </StyledSideNavList>
      </StyledSideNav>
      <StyledMain />
      <StyledFooter>
        <StyledFooterCopyright>&copy; 2018 MTH</StyledFooterCopyright>
        <StyledFooterSignature>
          Made with love by pure genius
        </StyledFooterSignature>
      </StyledFooter>
    </StyledLayout>
  )
}

export default App
