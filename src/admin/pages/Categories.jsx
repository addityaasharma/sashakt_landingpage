import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [categoryName, setCategoryName] = useState("");

    const CATEGORY_API = "https://googlyy.com/user/category";
    const DELETE_CATEGORY_API = (id) =>
        `https://googlyy.com/user/category/${id}`;

    useEffect(() => {
        if (!token || token === "undefined" || token === "null") {
            navigate("admin/sashaktlogin", { replace: true });
            return;
        }

        const fetchCategories = async () => {
            try {
                const res = await fetch(CATEGORY_API, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (res.status === 401) throw new Error("unauthorized");
                if (!res.ok) throw new Error("failed");

                const data = await res.json();
                setCategories(Array.isArray(data.categories) ? data.categories : []);
            } catch (err) {
                setError("Categories not available");
                setCategories([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, [navigate, token]);

    const handleAddCategory = async () => {
        if (!categoryName.trim()) return;

        try {
            const res = await fetch(CATEGORY_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ name: categoryName }),
            });

            if (!res.ok) throw new Error();

            const data = await res.json();
            setCategories((prev) => [...prev, data.category]);
            setCategoryName("");
            setShowModal(false);
        } catch {
            alert("Failed to add category");
        }
    };

    const handleDelete = async (id) => {
        const ok = window.confirm("Delete this category?");
        if (!ok) return;

        try {
            const res = await fetch(DELETE_CATEGORY_API(id), {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });

            if (!res.ok) throw new Error();

            setCategories((prev) => prev.filter((c) => c.id !== id));
        } catch {
            alert("Failed to delete category");
        }
    };

    if (loading) {
        return <p className="text-center">Loading categories...</p>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Categories</h1>
                <button
                    onClick={() => setShowModal(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    + Add Category
                </button>
            </div>

            {categories.length === 0 && (
                <div className="bg-white rounded-xl shadow p-6 text-center text-gray-600">
                    <p className="text-lg font-medium">No categories found</p>
                    <p className="text-sm">Add your first category to get started</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="bg-white rounded-xl shadow p-4 flex justify-between items-center"
                    >
                        <span className="font-medium text-gray-800">
                            {cat.name}
                        </span>

                        <button
                            onClick={() => handleDelete(cat.id)}
                            className="text-red-600 hover:underline text-sm"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">
                            Add Category
                        </h2>

                        <input
                            type="text"
                            placeholder="Category name"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            className="w-full border px-4 py-2 rounded-lg mb-4"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-200 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddCategory}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;
