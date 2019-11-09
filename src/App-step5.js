import React from 'react'
import styled, { css } from 'styled-components'
import { Bars, Times } from 'styled-icons/fa-solid'

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Side nav is hidden on mobile */
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    'header'
    'main'
    'footer';
  height: 100vh;
  /* Non-mobile styles, 750px breakpoint */
  @media only screen and (min-width: 46.875em) {
    grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
    grid-template-areas:
      'sidenav header'
      'sidenav main'
      'sidenav footer';
  }
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
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
  position: fixed;
  overflow-y: auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  z-index: 2; /* Needs to sit above the hamburger menu icon */
  background-color: #394263;
  transform: translateX(-245px);
  transition: all 0.6s ease-in-out;
  ${props =>
    props.active &&
    css`
      transform: translateX(0);
    `};

  /* Non-mobile styles, 750px breakpoint */
  @media only screen and (min-width: 46.875em) {
    position: relative; /* Fixed position on mobile */
    transform: translateX(0);
  }
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
const StyledHeaderSearch = styled.div`
  margin-left: 42px;
`
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
const StyledMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;
  height: 150px; /* Force our height since we don't have actual content yet */
  background-color: #e3e4e6;
  color: slategray;
`

const StyledMainHeaderHeading = styled.div``
const StyledMainHeaderUpdates = styled.div``

const StyledMainOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(265px, 1fr)
  ); /* Where the magic happens */
  grid-auto-rows: 94px;
  grid-gap: 20px;
  margin: 20px;
`

const StyledOverviewCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #d3d3;
`

const StyledOverviewCardIcon = styled.div``
const StyledOverviewCardInfo = styled.div``

const StyledMainCards = styled.div`
  column-count: 1;
  column-gap: 20px;
  margin: 20px;
  /* Medium-sized screen breakpoint (tablet, 1050px) */
  @media only screen and (min-width: 65.625em) {
    /* Break out main cards into two columns */
    column-count: 2;
  }
`

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #82bef6;
  margin-bottom: 20px;
  -webkit-column-break-inside: avoid;
  padding: 24px;
  box-sizing: border-box;
  &:first-child {
    height: 485px;
  }
  &:nth-child(2) {
    height: 200px;
  }
  &:nth-child(3) {
    height: 265px;
  }
`
const StyledMenuIcon = styled.div`
  position: fixed;
  display: flex;
  top: 5px;
  left: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  padding: 12px;
  background-color: #dadae3;
`
const StyledSideNavCloseIcon = styled.div`
  position: absolute;
  visibility: visible;
  top: 8px;
  right: 12px;
  cursor: pointer;
  font-size: 20px;
  color: #ddd;
  /* Non-mobile styles, 750px breakpoint */
  @media only screen and (min-width: 46.875em) {
    visibility: hidden;
  }
`

function App () {
  const [sideActive, setSideActive] = React.useState(false)
  const toggleSideActive = e => setSideActive(!sideActive)

  return (
    <StyledLayout>
      <StyledMenuIcon onClick={toggleSideActive}>
        <Bars size='16' />
      </StyledMenuIcon>
      <StyledHeader>
        <StyledHeaderSearch>Search...</StyledHeaderSearch>
        <StyledHeaderAvatar>Your face</StyledHeaderAvatar>
      </StyledHeader>
      <StyledSideNav active={sideActive}>
        <StyledSideNavCloseIcon onClick={toggleSideActive}>
          <Times size='16' />
        </StyledSideNavCloseIcon>
        <StyledSideNavList>
          <StyledSideNavListItem>Item one</StyledSideNavListItem>
          <StyledSideNavListItem>Item two</StyledSideNavListItem>
          <StyledSideNavListItem>Item three</StyledSideNavListItem>
          <StyledSideNavListItem>Item four</StyledSideNavListItem>
          <StyledSideNavListItem>Item five</StyledSideNavListItem>
        </StyledSideNavList>
      </StyledSideNav>
      <StyledMain>
        <StyledMainHeader>
          <StyledMainHeaderHeading>Hello User</StyledMainHeaderHeading>
          <StyledMainHeaderUpdates>Recent Items</StyledMainHeaderUpdates>
        </StyledMainHeader>
        <StyledMainOverview>
          <StyledOverviewCard>
            <StyledOverviewCardIcon>Overview</StyledOverviewCardIcon>
            <StyledOverviewCardInfo>Card</StyledOverviewCardInfo>
          </StyledOverviewCard>
          <StyledOverviewCard>
            <StyledOverviewCardIcon>Overview</StyledOverviewCardIcon>
            <StyledOverviewCardInfo>Card</StyledOverviewCardInfo>
          </StyledOverviewCard>
          <StyledOverviewCard>
            <StyledOverviewCardIcon>Overview</StyledOverviewCardIcon>
            <StyledOverviewCardInfo>Card</StyledOverviewCardInfo>
          </StyledOverviewCard>
          <StyledOverviewCard>
            <StyledOverviewCardIcon>Overview</StyledOverviewCardIcon>
            <StyledOverviewCardInfo>Card</StyledOverviewCardInfo>
          </StyledOverviewCard>
        </StyledMainOverview>
        <StyledMainCards>
          <StyledCard>Card</StyledCard>
          <StyledCard>Card</StyledCard>
          <StyledCard>Card</StyledCard>
        </StyledMainCards>
      </StyledMain>
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
