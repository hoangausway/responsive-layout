import React from 'react'
import { Bars, Times } from 'styled-icons/fa-solid'
import {
  StyledLayout,
  StyledHeader,
  StyledSideNav,
  StyledMain,
  StyledFooter,
  StyledHeaderSearch,
  StyledHeaderAvatar,
  StyledFooterCopyright,
  StyledFooterSignature,
  StyledSideNavList,
  StyledSideNavListItem,
  StyledMainHeader,
  StyledMainHeaderHeading,
  StyledMainHeaderUpdates,
  StyledMainOverview,
  StyledOverviewCard,
  StyledOverviewCardIcon,
  StyledOverviewCardInfo,
  StyledMainCards,
  StyledCard,
  StyledMenuIcon,
  StyledSideNavCloseIcon
} from './StyledComponents'

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
