import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] =useState("")

    const navigate = useNavigate();
    const apiUrl = "https://x9x46r49-5000.inc1.devtunnels.ms";

    const handleSubmit = () => {
        if (!username.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            return;
        }

        fetch(`${apiUrl}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => {
                if (res.ok) {
                    setMessage("User added successfully!");
                    setUsername("");
                    setPassword("");
                    setTimeout(function() {
                        navigate('/login');
                      }, 2000); 
                    
                } else {
                    setError("Unable to add user. Try again.");
                }
            })
            .catch(() => setError("Server error. Please try again."));
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <div className="card">
                        <div className="card-body">
                        {message && <p className="text-success mt-2">{message}</p>}
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter your name"
                                    className="form-control"
                                />
                            </div>
                            
                            <div className="form-group mt-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="form-control"
                                />
                            </div>
                            
                            <button className="btn btn-primary btn-block mt-4" onClick={handleSubmit}>
                                Sign Up
                            </button>
                            
                        </div>
                    </div>
                    <p className="text-center mt-3">
                        Already have an account?<Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;