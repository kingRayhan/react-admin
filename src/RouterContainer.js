import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Routes from './Routes'

const RouterContainer = () => {
    return (
        <BrowserRouter>
            <Switch>
                {Routes.map(({ path, component }, i) => (
                    <Route exact key={i} path={path} component={component} />
                ))}
            </Switch>
        </BrowserRouter>
    )
}

export default RouterContainer
