import useUserData from "../hooks/useUserData";
import { useAuth } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const { userDetails } = useUserData();
  return (
    <nav className="flex justify-between shadow-xl box-border bg-[#1363DF] py-2">
      {/* <h1>{isLoggedIn ? "Logged In" : "Not Logged In"}</h1>
      {userDetails && <h1>{userDetails.role}</h1>} */}
      <Link to={"/"} className="px-6 w-full mx-auto flex flex-row gap-2">
        <img
          className="w-12"
          src="study-university-svgrepo-com.svg"
          alt="Logo"
        />
        <p className="mt-2 text-2xl font-bold text-[#DFF6FF]">Study+</p>
      </Link>
      <div>
        {isLoggedIn ? (
          <div className="flex flex-row gap-4  font-semibold px-2 mt-1">
            {userDetails && userDetails.role === "admin" && (
              <NavLink
                to="/dashboard"
                className="bg-[#DFF6FF] text-[#1363DF] p-2 border rounded-lg hover:bg-[#47B5FF] hover:text-[#DFF6FF]"
              >
                Dashboard
              </NavLink>
            )}
            {["student"].includes(userDetails && userDetails.role) && (
              <>
                <NavLink
                  to="/enrollment"
                  className="bg-[#DFF6FF] text-[#1363DF] p-2 border rounded-lg hover:bg-[#47B5FF] hover:text-[#DFF6FF]"
                >
                  Enroll
                </NavLink>
                <NavLink
                  to="/indicourse"
                  className="bg-[#DFF6FF] text-[#1363DF] p-2 border rounded-lg hover:bg-[#47B5FF] hover:text-[#DFF6FF]"
                >
                  Courses
                </NavLink>
              </>
            )}
            {["teacher"].includes(userDetails && userDetails.role) && (
              <>
                <NavLink
                  to="/teacher"
                  className="bg-[#DFF6FF] text-[#1363DF] p-2 border rounded-lg hover:bg-[#47B5FF] hover:text-[#DFF6FF]"
                >
                  Course
                </NavLink>
              </>
            )}
            <p
              onClick={logout}
              className="bg-[#DFF6FF] text-[#1363DF] p-2 border rounded-lg hover:bg-[#47B5FF] hover:text-[#DFF6FF]"
            >
              Logout
            </p>
          </div>
        ) : (
          <div className="flex flex-row gap-4  font-semibold px-2 mt-1">
            {" "}
            <NavLink
              to="/login"
              className="bg-[#DFF6FF] text-[#1363DF] p-2 border rounded-lg hover:bg-[#47B5FF] hover:text-[#DFF6FF]"
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
