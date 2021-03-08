import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/AuthContext';

import api from '../services/api';

function Users() {
    const { handleLogout, loading } = useContext(Context);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await api.get('/users');

            setUsers(data);
        })();
    }, [])

    console.log(loading);
    if (loading) {
        return <h1> Loading... </h1>
    }

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.company} - {user.website}</li>
                ))}
            </ul>
            <button type="button" onClick={handleLogout}>Sair</button>
        </>
    )
}

export default Users;