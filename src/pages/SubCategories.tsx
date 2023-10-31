/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentHeader } from "@components";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SubCategory = () => {
  const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    axios
      .get("http://localhost:3000/api/getSubCategories")
      .then((response) => {
        console.log(response.data[0]);
        setSubCategories(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <ContentHeader title="Sub Category" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Create Sub Category</h3>
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
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="category_name" className="form-label">
                    Select Category
                  </label>
                  <select
                    name="category_name"
                    id="categoryName"
                    className="form-control"
                  >
                    <option value="">Select Category</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="subcategory_name" className="form-label">
                    Enter SubCategory Name
                  </label>
                  <input
                    type="text"
                    name="subcategory_name"
                    id="subcategoryName"
                    placeholder="Enter SubCategory Name"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Sub Category List</div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Category Name</th>
                      <th>Sub Category Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subcategories.map((subcategory, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{subcategory.category_name}</td>
                        <td>{subcategory.subcategory_name}</td>
                        <td>Actions</td>
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

export default SubCategory;
