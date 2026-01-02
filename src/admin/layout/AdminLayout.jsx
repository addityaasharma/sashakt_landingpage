import { NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/sashaktlogin", { replace: true });
    };

    return (
        <div className="h-screen flex overflow-hidden bg-gray-100">
            <aside className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="p-5 text-xl font-bold border-b border-gray-700 shrink-0">
                    Admin Panel
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <NavLink
                        to="/admin/dashboard"
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg ${isActive ? "bg-blue-600" : "hover:bg-gray-800"
                            }`
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/admin/category"
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg ${isActive ? "bg-blue-600" : "hover:bg-gray-800"
                            }`
                        }
                    >
                        Category
                    </NavLink>

                    <NavLink
                        to="/admin/blogs"
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg ${isActive ? "bg-blue-600" : "hover:bg-gray-800"
                            }`
                        }
                    >
                        Blogs
                    </NavLink>

                    <NavLink
                        to="/admin/settings"
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg ${isActive ? "bg-blue-600" : "hover:bg-gray-800"
                            }`
                        }
                    >
                        Settings
                    </NavLink>
                </nav>

                <button
                    onClick={logout}
                    className="m-4 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 shrink-0"
                >
                    Logout
                </button>
            </aside>

            <main className="flex-1 overflow-y-auto p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
