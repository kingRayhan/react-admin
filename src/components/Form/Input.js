import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.div`
    input {
        font-size: 16px;
        padding: 8px;
        width: 100%;
        max-width: 100%;
        &:focus {
            outline: none;
        }
    }
`

const Input = ({ label, placeholder, onChange, value, type = 'text' }) => {
    return (
        <StyledInput>
            <label>
                <div>{label}</div>
                <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </label>
        </StyledInput>
    )
}

export default Input
