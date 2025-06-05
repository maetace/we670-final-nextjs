'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function UserModal({ params }) {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://we670-final-nodejs-webservice.onrender.com/api/users/${params.uid}`)
            .then((res) => res.json())
            .then(setUser);
    }, [params.uid]);

    if (!user) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 50,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onClick={() => router.back()}
        >
            <div
                className="user"
                style={{
                    width: 400,
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '2rem',
                    position: 'relative',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => router.back()}
                    style={{ position: 'absolute', top: 10, right: 10 }}
                >
                    ❌
                </button>
                <img src={user.avatar} className="user-avatar" />
                <h2>{user.fullname} ({user.username})</h2>
                <p>Email: {user.email}</p>
                <p>Status: {user.status}</p>
                <p>Role: {user.role}</p>
                <p>Gender: {user.gender}</p>
            </div>
        </div>
    );
}