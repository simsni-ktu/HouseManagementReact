import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <nav>
      <ul className="flex flex-col sm:flex-row sm: items-center justify-evenly bg-slate-700 p-6 text-blue-200">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/residences">Residences</Link>
          </li>
          <li>
            <Link to="/listings">Listings</Link>
          </li>
          <li>
            <Link
              className={isLoggedIn ? "text-red-600" : ""}
              to={isLoggedIn ? "/logout" : "/login"}
            >
              {isLoggedIn ? "Log out" : "Log in"}
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
