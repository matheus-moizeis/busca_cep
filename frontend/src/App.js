import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Register from './screens/Register'
import Nav from './screens/Nav'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav />              
                <Switch>
                    <Route path='/busca_cep'>
                        <Register />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App