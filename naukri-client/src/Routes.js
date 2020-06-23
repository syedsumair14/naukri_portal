import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './Pages/Login'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
        </Switch>
    )
}
