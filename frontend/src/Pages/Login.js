import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Login.css';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
    
        try {
            const res = await axios.post("http://localhost:4001/users/login", userInfo);
    
            const { token } = res.data;
            if (token) {
                localStorage.setItem("authToken", token); 
                toast.success("Login Successful");
                navigate("/", { replace: true });
            } else {
                toast.error("Login failed, no token provided");
            }
        } catch (err) {
            console.error(err);
            toast.error("Login failed: " + (err.response?.data?.message || "Unexpected error"));
        }
    };    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className="card">
                    <p className="login">Log in</p>
                    <div className="inputBox">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required="required" 
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                        <span className="user">Email</span>
                    </div>

                    <div className="inputBox">
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required="required"  
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span>This field is required</span>}
                        <span>Password</span>
                    </div>

                    <button type="submit" className="enter">Login</button>
                    <p>Don't have an account<Link to="/signup"><b><br/><center>Signup</center></b></Link></p>
                </div>
            </div>
        </form>
    );
};

export default Login;
