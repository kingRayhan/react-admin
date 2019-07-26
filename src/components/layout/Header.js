import React from 'react'

import styled from 'styled-components'
import ActionMenu from './ActionMenu'

const StyledHeader = styled.header`
    background-color: ${tp => tp.theme.primary};
    height: ${tp => tp.theme.headerHeight};

    display: grid;
    grid-template-columns: ${tp => tp.theme.sidebarWidth} auto;
    align-items: center;
    justify-content: space-between;
    padding: 0 35px;
`

const StyledLogo = styled.h2`
    font-size: 22px;
    text-transform: uppercase;
    color: #fff;

    margin: 0;
    font-weight: bold;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledLogo>node pos</StyledLogo>
            <ActionMenu />
        </StyledHeader>
    )
}

export default Header
