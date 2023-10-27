/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentHeader } from "@components";
import React from "react";

const Accessories = () => {
  return (
    <div>
      <ContentHeader title="Accessories" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Create Accessories</h3>
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
                  <label htmlFor="categoryName" className="form-label">
                    Select Product
                  </label>
                  <select
                    name="category_name"
                    id="categoryName"
                    className="form-control"
                  >
                    <option value="">Select Product</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="AccessoryName" className="form-label">
                    Enter Accessories Name
                  </label>
                  <input
                    type="text"
                    name="accessory_name"
                    id="AccessoryName"
                    placeholder="Enter Accessories Name"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="AccessoryPrice" className="form-label">
                    Enter Accessories Price
                  </label>
                  <input
                    type="text"
                    name="accessory_price"
                    id="AccessoryPrice"
                    placeholder="Enter Accessories Price"
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
              <div className="card-title">Accessories List</div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Product Name</th>
                      <th>Accessories Name</th>
                      <th>Accessories Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessories;
