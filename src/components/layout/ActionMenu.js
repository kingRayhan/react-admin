import React from 'react'
import styled from 'styled-components'

const StyledActionMenu = styled.div`
    color: #fff;
    display: flex;
    align-items: center;

    img {
        height: 30px;
        width: 30px;
        padding-right: 12px;
    }
`

const ActionMenu = () => {
    return (
        <StyledActionMenu>
            <img src="https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg" alt="ui" />
            <span className="name">Rayhan</span>
        </StyledActionMenu>
    )
}

export default ActionMenu
