import React, { useState } from 'react';
import axios from 'axios';

const Login = React.memo(Props => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = (event) => {
        console.log(userName, password);
        var params = {
            "username": userName,
	        "password": password
        }
        axios.post('/user/authenticate', params)
        .then((result) => {
            console.log(result);
        });
    };    
    return(
        <React.Fragment>
            <div className="row">
                <div className="col-xl-4 offset-xl-4 mt-md-3">
                    <div className = "text-left">
                        <span className = "text-primary font-weight-bold">Cognizant </span>
                        <span className = "text-success">Outreach</span>
                        <div>
                            <small>feedback management system</small>
                        </div>
                    </div>
                    <br/>
                    <form onSubmit={loginUser}>
                        <div className="form-group">
                            <input type="text" placeholder="User Name" value={userName} onChange={event => setUserName(event.target.value)} className="form-control" id="userName"/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} className="form-control" id="userPassword" />
                        </div>
                        <div className="clearfix">
                            <div className="form-group form-check float-left">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
})

export default Login;