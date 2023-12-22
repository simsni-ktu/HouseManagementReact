import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Residences from "./pages/residences/Residences";
import Listings from "./pages/listings/Listings";
import { RequireAuth } from "react-auth-kit";
import Residence from "./pages/residences/Residence";
import AddResidence from "./pages/residences/AddResidence";
import AddListing from "./pages/listings/AddListing";
import Listing from "./pages/listings/Listing";
import EditResidence from "./pages/residences/EditResidence";
import EditListing from "./pages/listings/EditListing";
import Signup from "./pages/Signup";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/residences"
          element={
            <RequireAuth loginPath="/login">
              <Residences />
            </RequireAuth>
          }
        />
        <Route
          path="/listings"
          element={
            <RequireAuth loginPath="/login">
              <Listings />
            </RequireAuth>
          }
        />
         <Route
          path="/residences/:id"
          element={
            <RequireAuth loginPath="/login">
              <Residence />
            </RequireAuth>
          }
        />
        <Route
          path="/residences/create"
          element={
            <RequireAuth loginPath="/login">
              <AddResidence />
            </RequireAuth>
          }
        />
        <Route
          path="/residences/:residence_id/edit"
          element={
            <RequireAuth loginPath="/login">
              <EditResidence />
            </RequireAuth>
          }
        />
          <Route
          path="/residences/:id/listings/create"
          element={
            <RequireAuth loginPath="/login">
              <AddListing />
            </RequireAuth>
          }
        />
          <Route
          path="/residences/:residence_id/listings/:listing_id"
          element={
            <RequireAuth loginPath="/login">
              <Listing />
            </RequireAuth>
          }
        />
          <Route
          path="/residences/:residence_id/listings/:listing_id/edit"
          element={
            <RequireAuth loginPath="/login">
              <EditListing />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
