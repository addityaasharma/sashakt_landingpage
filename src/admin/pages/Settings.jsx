import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [devices, setDevices] = useState([]);
  const [userError, setUserError] = useState("");
  const [deviceError, setDeviceError] = useState("");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const USER_API = "https://your-api.com/api/me";
  const DEVICES_API = "https://your-api.com/api/devices";
  const LOGOUT_API = "https://your-api.com/api/logout";

  useEffect(() => {
    if (!token || token === "undefined" || token === "null") {
      navigate("admin/sashaktlogin", { replace: true });
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch(USER_API, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 401) throw new Error("unauthorized");
        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        setUser(data.user || null);
      } catch (err) {
        if (err.message === "unauthorized") {
          localStorage.removeItem("token");
          navigate("/sashaktlogin", { replace: true });
        } else {
          setUserError("User information not available");
        }
      }
    };

    const fetchDevices = async () => {
      try {
        const res = await fetch(DEVICES_API, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 401) throw new Error("unauthorized");
        if (!res.ok) throw new Error("Failed to fetch devices");

        const data = await res.json();
        setDevices(Array.isArray(data.devices) ? data.devices : []);
      } catch (err) {
        if (err.message === "unauthorized") {
          localStorage.removeItem("token");
          navigate("/sashaktlogin", { replace: true });
        } else {
          setDeviceError("Devices data not available");
        }
      }
    };

    Promise.allSettled([fetchUser(), fetchDevices()]).finally(() =>
      setLoading(false)
    );
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await fetch(LOGOUT_API, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (_) {
      console.error("error", _);
    } finally {
      localStorage.removeItem("token");
      navigate("/sashaktlogin", { replace: true });
    }
  };

  const handleChangePassword = () => {
    navigate("/admin/change-password");
  };

  if (loading) {
    return <p className="text-center">Loading settings...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-medium mb-4">User Information</h2>

        {userError ? (
          <p className="text-red-500 text-sm">{userError}</p>
        ) : user ? (
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Name:</strong> {user.name || "—"}
            </p>
            <p>
              <strong>Email:</strong> {user.email || "—"}
            </p>
            <p>
              <strong>Role:</strong> {user.role || "—"}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">No user data available.</p>
        )}
      </section>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-medium mb-4">Security</h2>
        <button
          onClick={handleChangePassword}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Change Password
        </button>
      </section>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-medium mb-4">Logged-in Devices</h2>

        {deviceError ? (
          <p className="text-red-500 text-sm">{deviceError}</p>
        ) : devices.length === 0 ? (
          <p className="text-gray-500">No active devices found.</p>
        ) : (
          <ul className="divide-y">
            {devices.map((device) => (
              <li
                key={device.id}
                className="py-3 flex justify-between items-center"
              >
                <span>{device.device || "Unknown device"}</span>
                <span className="text-sm text-gray-500">
                  {device.last_active || "—"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* <section className="bg-white rounded-xl shadow p-6 flex justify-end">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </section> */}
    </div>
  );
};

export default Settings;
