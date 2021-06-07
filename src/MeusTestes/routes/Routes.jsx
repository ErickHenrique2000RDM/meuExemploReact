import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Main from '../Main/Main'
import About from '../Main/About'

export default props => {
    return (
        <Switch>
            <Route exact path='/' component={Main}></Route>
            <Route path='/sobre' component={About}></Route>
            <Redirect  from="*" to="/"></Redirect>
        </Switch>
    )
}