import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState("");
  const [loading, setLoading] = useState(true);

  // Password visibility
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Change password states
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Popup state
  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "success", // success | error
  });

  const token = localStorage.getItem("token");

  const USER_API = "https://googlyy.com/user/me";
  const CHANGE_PASSWORD_API = "https://googlyy.com/user/password";

  // 🔁 Fetch user
  useEffect(() => {
    if (!token || token === "undefined" || token === "null") {
      navigate("/sashaktlogin", { replace: true });
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch(USER_API, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 401) throw new Error("unauthorized");
        if (!res.ok) throw new Error("failed");

        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        if (err.message === "unauthorized") {
          localStorage.removeItem("token");
          navigate("/sashaktlogin", { replace: true });
        } else {
          setUserError("User information not available");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate, token]);

  // 🔐 Change password
  const handlePasswordSubmit = async () => {
    if (!oldPassword || !newPassword) {
      showPopup("Both fields are required", "error");
      return;
    }

    try {
      const res = await fetch(CHANGE_PASSWORD_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        showPopup(data.message || "Failed to change password", "error");
        return;
      }

      showPopup("Password changed successfully", "success");
      setOldPassword("");
      setNewPassword("");
      setShowPasswordForm(false);
    } catch {
      showPopup("Something went wrong", "error");
    }
  };

  // 🟢🔴 Popup helper
  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });

    setTimeout(() => {
      setPopup({ show: false, message: "", type: "success" });
    }, 3000);
  };

  if (loading) {
    return <p className="text-center">Loading settings...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 relative">
      <h1 className="text-2xl font-semibold">Settings</h1>

      {/* 🔔 POPUP */}
      {popup.show && (
        <div
          className={`fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white transition-all
            ${popup.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {popup.message}
        </div>
      )}

      {/* USER INFO */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-medium mb-4">User Information</h2>

        {userError ? (
          <p className="text-red-500 text-sm">{userError}</p>
        ) : user ? (
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">No user data available.</p>
        )}
      </section>

      {/* SECURITY */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-medium mb-4">Security</h2>

        <button
          onClick={() => setShowPasswordForm(!showPasswordForm)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Change Password
        </button>

        {showPasswordForm && (
          <div className="mt-4 space-y-3 max-w-sm">

            {/* Old Password */}
            <div className="relative">
              <input
                type={showOldPassword ? "text" : "password"}
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg pr-10"
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-2 top-2 text-sm text-gray-600"
              >
                {showOldPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* New Password */}
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg pr-10"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-2 top-2 text-sm text-gray-600"
              >
                {showNewPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              onClick={handlePasswordSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Update Password
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Settings;
