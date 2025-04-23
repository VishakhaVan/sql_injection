import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(false); // toggle HTTP or HTTPS

    const login = async () => {
        const url = secure
            ? 'https://localhost:5443/api/login'
            : 'http://localhost:5000/api/login';

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        alert(data.message);
    };

    return (
        <div>
            <h2>Login Demo</h2>
            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <div>
                <label><input type="checkbox" onChange={e => setSecure(e.target.checked)} /> Use HTTPS</label>
            </div>
            <button onClick={login}>Login</button>
        </div>
    );
}
