import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Consult from './screens/Consult'
import Register from './screens/Register'
import Nav from './screens/Nav'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav />              
                <Switch>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/consult'>
                        <Consult />
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App