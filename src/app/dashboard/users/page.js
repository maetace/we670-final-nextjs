import Link from "next/link";

async function getUsers() {
    const res = await fetch(
        "https://we670-final-nodejs-webservice.onrender.com/api/users",
        {
            next: { revalidate: 60 }, // ISR ทุก 60 วินาที
        }
    );

    if (!res.ok) {
        throw new Error("ไม่สามารถโหลดข้อมูลผู้ใช้ได้");
    }

    return res.json();
}

export default async function UsersPage() {
    const users = await getUsers();

    return (
        <main className="container">
            <h1>Thunderbolts*</h1>
            <ul className="users">
                {users.map((user) => (
                    <li key={user.uid} className="user">
                        <Link href={`/dashboard/users/${user.uid}`}>
                            <img
                                src={user.avatar}
                                className="user-avatar"
                                alt={`Avatar of ${user.fullname}`}
                            />
                            <div className="user-fullname">
                                {user.fullname} ({user.username})
                            </div>
                            <div className="user-email">Email: {user.email}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}