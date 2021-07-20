import React from "react";
// import axios from "axios";
import {BrowserRouter, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import store from "./store";
import {Provider} from "react-redux";

function App(){

    return (

        <Provider store={store}>
            <BrowserRouter>
            <div>
                <Navbar/>
                <Route exact path="/" component={Login}/>
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
            </div>
            </BrowserRouter>
        </Provider>
      
    )
}

export default App;