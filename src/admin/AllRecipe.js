import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
// import { isAuthenticated } from "../pages/auth";
import AdminSidebar from "./AdminSidebar";
import { showRecipes } from "./apiAdmin";

const AllRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  // const [users, setUsers] = useState([]);
  // const { token } = isAuthenticated();

  const loadRecipes = () => {
    showRecipes().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRecipes(data);
      }
    });
  };

  // const loadUsers = () => {
  //   getUsers().then((data) => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setUsers(data);
  //     }
  //   });
  // };

  useEffect(() => {
    loadRecipes();
    // loadUsers();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSidebar />
          </div>
          <div className="col-md-9 ms-5 mt-5 table-responsive">
            <h2 className="text-center">There are {recipes.length} Recipes</h2>
            <hr />
            <table
              className="table table-bordered w-100"
              style={{ tableLayout: "fixed" }}
            >
              <thead>
                <tr>
                  <th>Recipe Name</th>
                  <th>Description</th>
                  <th>Ingredients</th>
                  <th>Preparation Time (min)</th>
                  <th>Cooking Time (min)</th>
                  <th>Instructions</th>
                  <th>Category</th>
                  <th>Owner</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recipes.map((item, i) => (
                  <tr key={i} style={{ height: "50px", overflowX: "scroll" }}>
                    <td>{item.recipe_name}</td>
                    <td>{item.description}</td>
                    <td>{item.ingredients}</td>
                    <td>{item.prep_time}</td>
                    <td>{item.cook_time}</td>
                    <td>{item.instructions}</td>
                    <td>{item.category.category_Name}</td>
                    <td>
                      {item.owner.name}
                      {/* {users.find((user) => user._id === item.owner)?.name} */}
                    </td>
                    <td>
                      <img
                        src={`${API}/${item.image}`}
                        alt={item.recipe_name}
                        className="img-fluid"
                      />
                    </td>
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

export default AllRecipe;
