import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Card from './components/Card'
import RouterContainer from './RouterContainer'

const theme = {
    headerHeight: '60px',
    sidebarWidth: '250px',
    primary: '#3D62A6',
    grey: '#F1F1F1',
    dark: '#707070',
    bodyBg: '#F1F1F1',
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <RouterContainer />
    </ThemeProvider>,

    document.getElementById('root')
)
