// not found component
// local storage? 
// refresh on browser, in route will cause error - fix if i have time




import react from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './redux/store'


import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';

import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import Main from './components/Main'
import Favorites from './components/Favorites'



function App() {



  return <>

    <Provider store={store}>
      <StyledEngineProvider injectFirst>

        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/">
              <NotFound />
            </Route>
          </Switch>

        </BrowserRouter>

      </StyledEngineProvider>,
    </Provider>

  </>
}

export default App;
