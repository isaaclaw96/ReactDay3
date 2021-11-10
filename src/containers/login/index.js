import React from 'react';
import classes from "./login.module.css";
import {Link} from "react-router-dom";

class Login extends React.Component{

    render(){
        return(
            <div className={classes.login_holder}>
                <h1>Login Page</h1>

                <form>
                    <input type="text" placeholder="Insert Email" />
                    <input type="text" placeholder="Insert Password" />
                </form>
                <button>
                    <Link to="/dashboard">Login</Link>
                </button>
            </div>
        );
    }
}

export default Login;