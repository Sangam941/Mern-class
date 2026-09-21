import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContexProvider } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { isAuth, setIsAuth } = useContext(AuthContexProvider);

  console.log("before logout:", isAuth);

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("authData");
    localStorage.setItem("isAuth", false);
    setIsAuth(false)
  };

  return (
    <div className="bg-blue-400 text-xl px-4 py-2 flex items-center justify-between cursor-pointer">
      <button
        onClick={() => navigate("/")}
        className="font-semibold cursor-pointer"
      >
        Task Management
      </button>

      {isAuth && (
        <ul className="flex items-center jusitfy-center gap-3">
          <Link to="/add-task">
            <li>Add Task</li>
          </Link>
        </ul>
      )}

      {isAuth ? (
        <button onClick={handleLogout} className="font-semibold cursor-pointer">
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="font-semibold cursor-pointer"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
