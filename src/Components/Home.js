import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Home() {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const apiUrl = `https://x9x46r49-5000.inc1.devtunnels.ms/home/${id}`;

    useEffect(() => {
        fetchUser();
    }, [id]);

    const fetchUser = () => {
        fetch(apiUrl)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch user data");
                }
                return res.json();
            })
            .then((data) => setUser(data))
            .catch((err) => console.error("Error fetching user:", err));
    };

    return (
        <div>
            <h3>Welcome {user.username || "Guest"}</h3>
        </div>
    );
}

export default Home;