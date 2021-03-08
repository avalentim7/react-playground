import React, { useContext } from 'react';

import { Context } from '../context/AuthContext';

export default function Login() {
    const { loading, handleLogin } = useContext(Context);

    if (loading) {
        return <h1> Loading...</h1>
    }
    return <button type="button" onClick={handleLogin}>Login</button>
}