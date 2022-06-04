import React,{useState,useContext} from "react";
import { Navigate } from "react-router";
import axios from 'axios'
import { store } from "../App";
import { Link } from "react-router-dom";
import "./login.css";
const Login=()=>{
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [, forceUpdate] = useState(false);
    const [token,setToken]=useContext(store)
    // const [udata,setUserData] = useContext(store)
    const [data,setData]=useState({
        username:"",
        password:"",
    })
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        console.log(data)
        e.preventDefault();
axios.post('http://localhost:5000/login',data).then(
    res=>{
        setToken({...res.data.token,...res.data.data})
        // setUserData(res.data.data)
    }
)
    }

    if(token){
        return <Navigate to='/dashboard'  />
    }
   

    return(
        <div className="d-flex justify-content-center text-center">
          <div className="col-6">
          <h1 className="mb-3">User Login</h1>
                    <form onSubmit={submitHandler}>
                      <div className="form-group">
                        {/* <label htmlFor="username">Email</label> */}
                        <input
                          type="text"
                          className="form-control border"
                          id="username"
                          name="username"
                          placeholder="Username"
                          autoComplete="off"
                          value={data.email}
                          // required
                          onChange={changeHandler}
                          onFocus={() => setMessage("")}
                        />
                      </div>
                      <div className="form-group mb-2 mt-1">
                        {/* <label htmlFor="password">Password</label> */}
                        <input
                          type="password"
                          className="form-control border"
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
                        <span className="error-message">{message}</span>
                      </div>
                      {!loading && (
                        <button className="btn btn-primary font-weight-bold text-uppercase w-100" type="submit">
                          Login
                        </button>
                      )}
                    </form>
                    <p className="mb-1">Don't have account <a href='/register'>Create Account</a></p>
          </div>
        </div>
    )
}
export default Login