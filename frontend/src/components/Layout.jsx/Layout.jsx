import React, { useState, useEffect } from "react";
import { Icons } from "../../assets/icons";
import axios from "axios";
import "./style.css";
// import AddUser from "../../model/AddUser";
import { NavLink } from "react-router-dom";

function Layout(props) {
  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchUserDetailsApi();
  }, [isLoading]);

  const fetchUserDetailsApi = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:4000/api/v1/getAllUser`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setUserDetails(response.data.data);
        setIsLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        `http://localhost:4000/api/v1/deleteUser?id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setUserDetails(response.data.data);
        setIsLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("userDetails", userDetails);
  // console.log(userDetails[0].name);

  return (
    <div className="container-fluid p-2">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            {userDetails.length > 0 ? (
              <>
                {userDetails.map((user) => (
                  <div className="col-md-4 p-2" key={user.id}>
                    <div className="card border-0 shadow">
                      <div className="card-body">
                        <table className="table table-sm table-borderless">
                          <tbody>
                            <tr>
                              <td>User Name :</td>
                              <td>
                                <span className="fw-semibold">
                                  {user?.name}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Phone No :</td>
                              <td>
                                <span className="fw-semibold">
                                  {user?.phone_number}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Email :</td>
                              <td>
                                <span className="fw-semibold">
                                  {user?.email}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="ms-2">
                          <NavLink to={`user/${user?.id}`}>
                            <div className="btn btn-primary float-start">
                              {Icons.FaRegEye} View
                            </div>
                          </NavLink>
                          <div
                            className="btn btn-danger float-end"
                            onClick={() => handleDelete(user?.id)}
                          >
                            {Icons.MdDelete} Delete
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <span className="text-center fs-3 fw-bolder">No User Found</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
