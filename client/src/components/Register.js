import React, { useState } from "react";
import axios from 'axios'
import { Navigate } from "react-router";
// import { store } from "../App";
// import { Link } from "react-router-dom";
const Register = () => {
    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        username: "",
        password: "",
        conformPassword: ""
    })
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', data)
        .then(function(res){
alert(res.data) 
 

})

let a=2 
if(a===2){
    return <Navigate to='/login'/>
} 

    }

    return (
      <div className="d-flex justify-content-center text-center"> 
        <div className="col-6">
        <h1 className="">Registration</h1>

                    <form onSubmit={submitHandler}>
                      <div className="form-group">
                        {/* <label htmlFor="username">Email</label> */}
                        <input
                          type="text"
                          className="form-control border mb-1"
                          id="firstname"
                          name="firstname"
                          placeholder="Firstname"
                          autoComplete="off"
                          value={data.firstname}
                          // required
                          onChange={changeHandler}
                          onFocus={() => setMessage("")}
                        />
                        <input
                          type="text"
                          className="form-control border mb-1"
                          id="lastname"
                          name="lastname"
                          placeholder="Lastname"
                          autoComplete="off"
                          value={data.lastname}
                          // required
                          onChange={changeHandler}
                          onFocus={() => setMessage("")}
                        />
                        <input
                          type="text"
                          className="form-control border mb-1"
                          id="username"
                          name="username"
                          placeholder="Username"
                          autoComplete="off"
                          value={data.username}
                          // required
                          onChange={changeHandler}
                          onFocus={() => setMessage("")}
                        />
                      </div>
                      <div className="form-group mb-2 mt-1">
                        {/* <label htmlFor="password">Password</label> */}
                        <input
                          type="password"
                          className="form-control border mb-1"
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={data.password}
                          maxLength={16}
                          minLength={8}
                          // required
                          onChange={changeHandler}
                          onFocus={() => setMessage("")}
                        />
                        <input
                          type="password"
                          className="form-control border"
                          id="conformPassword"
                          name="conformPassword"
                          placeholder="confirmPassword"
                          value={data.conformPassword}
                          maxLength={16}
                          minLength={8}
                          // required
                          onChange={changeHandler}
                          onFocus={() => setMessage("")}
                        />
                        <span className="error-message">{message}</span>
                      </div>
                      {!loading && (
                        <button className="btn btn-primary font-weight-bold text-uppercase w-100" type="submit">
                          Register
                        </button>
                      )}
                    </form>
                   
                    <p className="mb-1">Already have account <a href='/login'>Login Account</a></p>
                    </div>
      </div>


    )
}
export default Register