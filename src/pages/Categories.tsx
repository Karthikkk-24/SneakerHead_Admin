/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentHeader } from "@components";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/addCategory", {
        categoryName,
      });
      window.location.reload();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    axios
      .get("http://localhost:3000/api/getCategories")
      .then((response) => {
        console.log(response.data[0]);
        setCategories(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <ContentHeader title="Category" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Create Category</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fa fa-minus" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="col-md-6 form-group">
                <label htmlFor="category_name" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  name="category_name"
                  id="categoryName"
                  placeholder="Enter Category Name"
                  className="form-control"
                  value={categoryName}
                  onChange={handleCategoryNameChange} // Add onChange handler
                />
              </div>
            </div>
            <div className="card-footer">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Category List</div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Category Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{category.category_name}</td>
                        <td><button className="btn btn-outline-primary"><i className="fa-regular fa-pen-to-square"></i></button>&emsp;<button className="btn btn-outline-danger"><i className="fa-regular fa-trash-can"></i></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
