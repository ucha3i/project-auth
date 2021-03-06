import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import { StartPage } from './components/StartPage'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'
import { Secret } from './components/Secret'

export const App = () => {
  const [accessToken, setAccessToken] = useState()

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <StartPage />
          </Route>
          <Route path='/users'>
            <SignUp />
          </Route>
          <Route path='/sessions'>
            <SignIn onAuthenticate={setAccessToken} />
          </Route>
          <Route path='/secrets'>
            <Secret accessToken={accessToken} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
