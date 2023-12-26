import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import AllUsers from "./Pages/AllUsers";
import EditUsers from "./Pages/EditUsers";
import SideNav from "./Pages/SideNav";
import UsersChangePass from "./Pages/UsersChangePass";
import AllUsersEditAddress from "./Pages/AllUsersEditAddress";
import AddAddress from "./Pages/AddAddress";
import PayMethod from "./Pages/PayMethod";
import OrderHistory from "./Pages/OrderHistory";
import Suspend from "./Pages/Suspend";

const App = () => {
  return (
    <>
      <div className="bg">
        <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<AllUsers />} />
            <Route path="/Suspend" element={<Suspend />} />

            <Route element={<SideNav />} />
            <Route path="/EditUsers" element={<EditUsers />} />
            <Route path="/UsersChangePass" element={<UsersChangePass />} />
            <Route
              path="/AllusersEditAddress"
              element={<AllUsersEditAddress />}
            />
            <Route path="/AddAddress" element={<AddAddress />} />
            <Route path="/PayMethod" element={<PayMethod />} />
            <Route path="/OrderHistory" element={<OrderHistory />} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;
