/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentHeader } from "@components";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  });

  function fetchProducts() {
    axios
      .get("http://localhost:3000/api/getProducts")
      .then((response) => {
        console.log(response.data[0]);
        setProducts(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <ContentHeader title="Products" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Create Product</h3>
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
                  <label htmlFor="category_name" className="form-label">
                    Select Sub Category
                  </label>
                  <select
                    name="subcategory_name"
                    id="subcategoryName"
                    className="form-control"
                  >
                    <option value="">Select Sub Category</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="subcategory_name" className="form-label">
                    Enter Product Name
                  </label>
                  <input
                    type="text"
                    name="product_name"
                    id="productName"
                    placeholder="Enter Product Name"
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
              <div className="card-title">Product List</div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Category Name</th>
                      <th>Sub Category Name</th>
                      <th>Product Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.category_name}</td>
                        <td>{product.subcategory_name}</td>
                        <td>{product.product_name}</td>
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

export default Products;
