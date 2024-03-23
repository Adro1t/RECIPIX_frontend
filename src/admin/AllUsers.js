import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { getUsers } from "./apiAdmin";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    getUsers().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSidebar />
          </div>
          <div className="col-md-9 ms-5 mt-5 table-responsive">
            <h2 className="text-center">There are {users.length} Users</h2>
            <hr />
            <table
              className="table table-bordered w-100"
              style={{ tableLayout: "fixed" }}
            >
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Role</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, i) => (
                  <tr key={i} style={{ height: "50px", overflowX: "scroll" }}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role ? "admin" : "user"}</td>

                    <td>
                      <Link to="#" className="btn btn-danger">
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
