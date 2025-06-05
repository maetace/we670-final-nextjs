import Link from "next/link";

export default function DashboardLayout({ children, modal }) {
    return (
        <section>
            <nav
                style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1rem 2rem",
                    background: "#222",
                    color: "#fff",
                }}
            >
                <Link href="/" style={{ color: "#fff" }}>
                    🏠 Home
                </Link>

                <Link href="/dashboard/users" style={{ color: "#fff" }}>
                    🧑‍💼 Users
                </Link>
            </nav>

            <div style={{ padding: "1rem 2rem" }}>
                {children}
                {modal} {/* ✅ ส่วนนี้คือจุดรับ Slot @modal */}
            </div>
        </section>
    );
}