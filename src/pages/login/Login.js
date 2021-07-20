import React, { useState } from "react";
import AuthService from "../../services/auth-services";
import {useDispatch} from "react-redux";
import {setUser} from "./store/actions";
import {useHistory} from "react-router-dom";

function Login(){

    const [user, setState] = useState({
        username:"",
        password:""
    });

    const history = useHistory();

    const dispatch = useDispatch();

    const onLogin = () =>{
        AuthService.login(user)
        .then(res => {
            AuthService.storeUserData(res.data);
            dispatch(setUser(res.data))
            history.push('/home');
        })
    }

    return(
        <div className="container">
             <h1>Login</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder="name" className="form-control" 
                onChange={event =>setState({...user,username:event.target.value})}/><br/>
                <input type="password" placeholder="password" className="form-control" 
                onChange={event=>setState({...user,password:event.target.value})} /><br/>
                <button className="btn btn-primary" onClick={onLogin}>Login</button>
            </div>
      
   </div>
    )
}

export default Login;