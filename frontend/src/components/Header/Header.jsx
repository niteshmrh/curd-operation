import React from "react";
import { NavLink } from "react-router-dom";
import AddUser from "../../model/AddUser";
import logo from "../../assets/images/logo.png";
import { Icons } from "../../assets/icons";

function Header(props) {
  return (
    <nav className="py-2 border-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex  justify-content-between">
              <div className="logo fw-bold fs-4 border rounded p-1 bg-primary">
                <NavLink to="/" className="text-decoration-none text-light">
                  {Icons.MdManageAccounts}
                  <span className="mb-3 fs-8 align-self-center fw-medium">
                    User Management
                  </span>
                </NavLink>
              </div>
              <div className="menu-bar d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-primary fw-medium"
                  data-bs-toggle="modal"
                  data-bs-target="#addUser"
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddUser />
    </nav>
  );
}

export default Header;
