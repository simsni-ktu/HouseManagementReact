import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Residences from "./pages/Residences";
import Listings from "./pages/Listings";
import MustLogin from "./pages/MustLogin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/residences"
          element={isLoggedIn ? <Residences /> : <MustLogin />}
        />
        <Route
          path="/listings"
          element={isLoggedIn ? <Listings /> : <MustLogin />}
        />
      </Route>
    </Routes>
  );
}

export default App;
