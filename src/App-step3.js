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
  column-count: 2;
  column-gap: 20px;
  margin: 20px;
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
