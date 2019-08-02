import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from './Routes'

const RouterContainer = props => {
    return (
        <Router>
            <Switch>
                {Routes.map(({ path, component }, i) => (
                    <Route exact={true} key={i} path={path} component={component} />
                ))}
            </Switch>
        </Router>
    )
}

export default RouterContainer
