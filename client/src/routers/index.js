import React from 'react'
import { Switch, Route, Redirect,BrowserRouter as Router } from 'react-router-dom'
import { List } from '../views'
export default class RouterView extends React.Component {
    render() {
        return(
            <Router>
                < Switch >
                    <Route path="/" exact render={() => (
                        <Redirect to="/list"></Redirect>
                    )}></Route>
                    <Route path="/list" component={List}></Route>
                </Switch>
            </Router>
        )
    }
}