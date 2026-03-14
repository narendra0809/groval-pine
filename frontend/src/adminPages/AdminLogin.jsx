import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../store/user/userSlice";
import axios from "axios";

const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "password123";

const SERVER_URI = import.meta.env.VITE_SERVER_URI;

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(`${SERVER_URI}/api/admin/login`, {
        username,
        password,
      });

      if (res.status === 200) {
        dispatch(loginSuccess({ username, token: res.data.token }));
        navigate("/admin");
      } else {
        dispatch(loginFailure("Invalid credentials"));
      }
    } catch (error) {
      console.log(error);
      dispatch(loginFailure("Invalid credentials"));
    }
  };

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded shadow p-6 w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Admin Login
        </h2>
        <input
          type="username"
          placeholder="username"
          className="border border-gray-300 rounded w-full px-3 py-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded w-full px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-sm text-red-500">{error}</div>}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
