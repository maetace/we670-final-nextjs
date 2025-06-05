import Link from "next/link";

async function getUsers(searchParams) {
    const queryObj = {};

    if (searchParams.gender) queryObj.gender = searchParams.gender;
    if (searchParams.status) queryObj.status = searchParams.status;
    if (searchParams.role) queryObj.role = searchParams.role;

    const queryString = new URLSearchParams(queryObj).toString();

    const res = await fetch(
        `https://we670-final-nodejs-webservice.onrender.com/api/users?${queryString}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("โหลดข้อมูลไม่สำเร็จ");
    }

    return res.json();
}

export default async function UsersPage({ searchParams, children }) {
    const users = await getUsers(searchParams);

    return (
        <main className="container">
            <h1>Thunderbolts*</h1>

            <div className="mb-4 text-gray-800 font-medium">
                <strong>Filter:</strong>{" "}
                <Link href="/dashboard/users">ทั้งหมด</Link> |{" "}
                <Link href="?gender=male">ชาย</Link> |{" "}
                <Link href="?gender=female">หญิง</Link> |{" "}
                <Link href="?status=active">Active</Link> |{" "}
                <Link href="?role=admin">Admin</Link>
            </div>

            <ul className="users">
                {users.map((user) => (
                    <li key={user.uid} className="user">
                        <Link href={`/dashboard/users/${user.uid}?modal=true`}>
                            <img
                                src={user.avatar}
                                className="user-avatar"
                                alt={`Avatar of ${user.fullname}`}
                            />
                            <div className="user-fullname">
                                {user.fullname} ({user.username})
                            </div>
                            <div className="user-email">Email: {user.email}</div>
                            <div className="user-info">
                                <p>
                                    Gender: {user.gender} | Status: {user.status} | Role: {user.role}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* 👇 สำคัญ: ต้องใส่ children เพื่อแสดง @modal route */}
            {children}
        </main>
    );
}