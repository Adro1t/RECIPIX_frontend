import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getCategories, getFilteredRecipes } from "../components/uiApi";
import Checkbox from "../components/Checkbox";
import { times } from "../components/Times";
import RadioBox from "../components/RadioBox";
import Card from "../components/Card";
import "./Explore.css";
import "./auth/Login.css";

const Explore = () => {
  const [myFilters, setMyFilters] = useState({
    filters: {
      category: [],
      time: [],
    },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(8);
  const [skip, setSkip] = useState(0);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [size, setSize] = useState(0);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;
    if (filterBy === "total_time") {
      let timeValues = handleTime(filters);
      newFilters.filters[filterBy] = timeValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handleTime = (value) => {
    const data = times;
    let array = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  const loadFilteredResults = (newFilters) => {
    getFilteredRecipes(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredRecipes(data.recipes);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    getFilteredRecipes(toSkip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredRecipes([...filteredRecipes, ...data.recipes]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size >= 0 &&
      size >= limit && (
        <center>
          <button className="input-btn btn m-5" onClick={loadMore}>
            Load More
          </button>
        </center>
      )
    );
  };

  return (
    <>
      <Nav />
      <div className="container-fluid mt-5 px-3">
        <div className="row main-explore">
          <div className="col col-md-2 filter glass">
            <h1 className="sidebar-text">Cuisine</h1>
            <hr></hr>
            <Checkbox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, "category")}
            />
            <br></br>
            <hr></hr>
            <h1 className="sidebar-text">Cooking Time</h1>
            <hr></hr>
            <RadioBox
              times={times}
              handleFilters={(filters) => handleFilters(filters, "total_time")}
            />
          </div>
          <div className="col main-explore-1">
            <div className="container-fluid">
              <div className="card-Explore">
                {filteredRecipes.map((recipe, i) => (
                  <Card key={i} props={recipe} />
                ))}
              </div>
              {loadMoreButton()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
