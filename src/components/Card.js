import React from 'react'
import styled from 'styled-components'
const StyledCard = styled.div`
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 35px;
`

const Card = ({ children }) => {
    return <StyledCard>{children}</StyledCard>
}

export default Card
