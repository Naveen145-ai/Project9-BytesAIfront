import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Profile icon

export default function Header() {
    return (
        <nav className="navbar bg-primary py-3">
            <div className="container d-flex justify-content-between align-items-center">

                {/* Left: Logo */}
                <div className="navbar-brand">
                    <Link to="/home">
                        <img width="150px" src="/pro/img/money.jpg" alt="Logo" />
                    </Link>
                </div>

                {/* Right: Profile and Payment */}
                <div className="d-flex align-items-center gap-4">

                    {/* Profile Icon */}
                    <Link to="/profile" className="text-white text-decoration-none">
                        <FaUserCircle size={30} title="Profile" />
                    </Link>

                    {/* Payment Link (No icon, just text) */}
                    <Link to="/payment" className="text-white text-decoration-none fw-bold">
                        Payment
                    </Link>
                </div>
            </div>
        </nav>
    );
}
