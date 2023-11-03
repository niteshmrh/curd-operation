import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Icons } from "../../assets/icons";
import axios from "axios";
import UpadteUser from "../../model/UpdateUser";

function UserDetail(props) {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // `http://localhost:4000/api/user/${id}?populate=*`,

  useEffect(() => {
    fetchParticularUserApi();
  }, [isLoading]);

  const fetchParticularUserApi = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:4000/api/v1/getUser/${id}?populate=*`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setUser(response.data.data);
        setIsLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("user==========>", user);

  return (
    <div className="p-4 container">
      <div className="row">
        <div className="col-md-12">
          <div className="border p-2 rounded bg-white">
            <div className="text-end">
              <NavLink to="/">
                <button className="btn btn-light">
                  {Icons.MdOutlineKeyboardBackspace}
                  Back
                </button>
              </NavLink>
            </div>
            {user || user.length > 0 ? (
              <div className="mt-3 p-5">
                <h2 className="mb-4 text-center">User Information</h2>
                <div className="d-flex">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <span className="float-start">Name</span>
                        <span className="float-end">{user.name}</span>
                      </li>
                      <li className="list-group-item">
                        <span className="float-start">Email</span>
                        <span className="float-end">{user.email}</span>
                      </li>
                      <li className="list-group-item">
                        <span className="float-start">Mobile Number</span>
                        <span className="float-end">{user.phone_number}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            ) : (
              <h1>Data Not Found</h1>
            )}
            <ul className="d-flex flex-row justify-content-center col-md-12">
              <li className="mt-3 list-group-item">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#updateuser"
                >
                  {Icons.TfiPencil}
                  Update
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <UpadteUser update={user} />
    </div>
  );
}

export default UserDetail;
