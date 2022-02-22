import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'


const App = () => {
    return (

        <BrowserRouter>
            <Switch>

                <Route exact path='/'>
                    <WelcomePage />
                </Route>

                <Route path='/main'>
                    <MainPage />

                </Route>

                <Route path='/city/:countryCode/:city'>
                    <CityPage />

                </Route>

                <Route >
                    <NotFoundPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default App