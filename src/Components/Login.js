import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

function Login() {
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

        fetch(`${apiUrl}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Login successful") {
                    setMessage("User  logged in successfully");
                    setUsername("");
                    setPassword("");
                    setTimeout(function() {
                        navigate(`/home/${data.id}`);
                      }, 2000);   
                } else {
                    setError(data.message || "Invalid login credentials.");
                }
            })
            .catch(() => setError("Server error. Please try again."));
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Login</h2>
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
                                    placeholder="Enter your username"
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
                                Login
                            </button>
                            {error && <p className="text-danger mt-2">{error}</p>}
                        </div>
                    </div>
                    <p className="text-center mt-3">
                        Don't have an account? <Link to="/">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;