async function getUser(uid) {
    const res = await fetch(
        `https://we670-final-nodejs-webservice.onrender.com/api/users/${uid}`,
        {
            cache: "no-store", // ปิด cache เพื่อดูข้อมูลล่าสุดเสมอ
        }
    );

    if (!res.ok) {
        throw new Error("ไม่สามารถโหลดข้อมูลผู้ใช้");
    }

    return res.json();
}

export default async function UserDetailPage({ params }) {
    const user = await getUser(params.uid);

    return (
        <main className="container">
            <h1>ข้อมูลของ {user.fullname}</h1>
            <div className="user" style={{ maxWidth: 400, margin: "0 auto" }}>
                <img
                    src={user.avatar}
                    className="user-avatar"
                    alt={`Avatar of ${user.fullname}`}
                />
                <div className="user-fullname">
                    {user.fullname} ({user.username})
                </div>
                <div className="user-email">Email: {user.email}</div>
                <div className="user-email">Status: {user.status}</div>
                <div className="user-email">Role: {user.role}</div>
            </div>
        </main>
    );
}