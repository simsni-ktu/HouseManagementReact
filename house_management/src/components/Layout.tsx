import { useEffect, useState } from "react";
import {  useIsAuthenticated, useSignOut } from "react-auth-kit";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
  const signOut = useSignOut();
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()

  const handleSignOut = () => {
    signOut()
    navigate("/login")
  }

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
            {isAuthenticated() ? (
              <button className="text-red-600" onClick={handleSignOut}>
                Log out
              </button>
            ) : (
              <Link to="/login">Log in</Link>
            )}
          </li>
        
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
