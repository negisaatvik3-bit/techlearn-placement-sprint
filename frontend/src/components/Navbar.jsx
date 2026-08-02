import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        TechLearn Placement Sprint
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;