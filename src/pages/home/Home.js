import React, {useEffect} from "react";
import AuthService from "../../services/auth-services";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeUser, setUser} from "../login/store/actions";

function Home() {

    const  userStore = useSelector(store =>store.userStore);

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect ( () =>{
        if(AuthService.getuserData() === null){
            history.push('/')
        }
        // da upamti ulogovoanog korisnika posle refresh strane
        if (userStore) {
            dispatch(setUser(AuthService.getuserData()))
        }
    }, [] )

    const onLogout = () => {
        AuthService.logout(history);
        dispatch(removeUser());
    }

    return (

        <div className="container">
           <h1>Home Page</h1>
           <h2>Zdravo {userStore.name}</h2>
           <button className="btn btn-warning" onClick={onLogout}>Logout</button>
        </div>
       
    )
}

export default Home;