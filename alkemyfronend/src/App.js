import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import { Provider } from 'react-redux';
import generateStore from './features/Redux/Store';
import Auth from './components/Auth';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Boudgets from './components/boudgets/Boudgets';
import Form from './components/boudgets/Form'

function App() {
  const store = generateStore();
  const [log, setLog] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('userSession')) {
      const userSession = JSON.parse(localStorage.getItem('userSession'))
      if (parseInt(userSession.id_user) !== 0) {
        // setLog(true)
        setLog(false)
        // console.log(userSession, "variable de sesión")
      } else {
        console.log("debe loguearse")

      }
    }
  }, [])



  return (
    <div >
      {/* //////////////////////////////////////////////////////////////////// */}
      <Provider store={store}>

        {
          log ? (
            <div>
              <Auth />
            </div>
          ) : (
            <div>
              {/* <Navbar /> */}


              <Router>
                <Navbar />
                <Switch>
                  <Route exact path="/" component={Boudgets} />
                  <Route path="/boudgetsForm" component={Form} />
                </Switch>
              </Router>


            </div>
          )
        }




      </Provider>

    </div>
  );
}

export default App;
