import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css';
import axios from "axios";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Signup = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/login";

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post("http://localhost:4001/users/signup", userInfo, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.data) {
                toast.success('Signup Successful');
                navigate(from, { replace: true });
            }
        } catch (err) {
            if (err.response) {
                console.error(err.response.data);
                toast.error("Error: " + err.response.data.message);
            } else {
                console.error(err);
                toast.error("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className="card">
                    <p className="signup">Sign up</p>
                    
                    {/* Fullname Input */}
                    <div className="inputBox">
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            required="required"
                            {...register("fullname", { required: "Fullname is required" })}
                        />
                        {errors.fullname && <span>{errors.fullname.message}</span>}
                        <span className="user">Fullname</span>
                    </div>
                    
                    {/* Email Input */}
                    <div className="inputBox">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required="required"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                        <span className="user">Email</span>
                    </div>
                    
                    {/* Password Input */}
                    <div className="inputBox">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required="required"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                        />
                        {errors.password && <span>{errors.password.message}</span>}
                        <span>Password</span>
                    </div>
                    
                    {/* Submit Button */}
                    <button type="submit" className="enter">Signup</button>
                    
                    <p>
                        Already have an account? 
                        <Link to="/login">
                            <b><br /><center>Login</center></b>
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default Signup;
