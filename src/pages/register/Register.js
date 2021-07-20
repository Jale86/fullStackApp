import React from "react";
import {useState} from "react";
import AuthService from "../../services/auth-services";
import {useHistory} from "react-router-dom";

function Register(){

    const [regUser,setState] = useState({
        name: "",
        pass: ""
    })

    const history = useHistory();

    const onRegister = () =>{
        console.log(regUser);
           AuthService.register(regUser)
           .then(res => {
              if(res.data === "ok"){
                  history.push('/'); //vodi na login pocetnu stranicu
              }else{
                  history.push('/register')
              }
           })
    }

    return (
        <div className="container">
             <h1>Register</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder="name" className="form-control" value={regUser.name}
                onChange={event => setState({...regUser, name : event.target.value} )}/><br/>

                <input type="password" placeholder="password" className="form-control"  value={regUser.pass}
                onChange={event=>setState({...regUser,pass:event.target.value})}/><br/>
                <button onClick={onRegister} className="btn btn-primary">Register</button>
            </div>
           
        </div>
       
    )
}

export default Register;