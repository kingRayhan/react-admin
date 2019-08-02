import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'

const StyledLayout = styled.div`
    display: grid;
    grid-template-columns: ${tp => tp.theme.sidebarWidth} auto;
    column-gap: 0;
    row-gap: 0;

    grid-template-areas:
        'header header'
        'sidebar content';

    header {
        grid-area: header;
    }
`

const StyledSidebar = styled.aside`
    min-height: calc(100vh - ${tp => tp.theme.headerHeight});
    grid-area: sidebar;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

const StyledContent = styled.aside`
    grid-area: content;
    padding: 35px;
`

const Layout = ({ children }) => {
    return (
        <StyledLayout>
            <Header />
            <StyledSidebar>
                <Sidebar />
            </StyledSidebar>
            <StyledContent>{children}</StyledContent>
        </StyledLayout>
    )
}

export default Layout
