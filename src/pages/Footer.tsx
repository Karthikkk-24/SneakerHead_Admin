/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentHeader } from "@components";
import React from "react";

const Footer = () => {
  return (
    <div>
      <ContentHeader title="Footer" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Create Footer</h3>
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
                    Enter Tagline
                  </label>
                  <input
                    type="text"
                    name="tagline"
                    id="tagline"
                    className="form-control"
                    placeholder="Enter Tagline"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="description" className="form-label">
                    Enter Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Enter Description"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="categoryName" className="form-label">
                    Link 1
                  </label>
                  <input
                    type="text"
                    name="tagline"
                    id="tagline"
                    className="form-control"
                    placeholder="Enter Tagline"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="description" className="form-label">
                    Link Heading
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Enter Description"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="categoryName" className="form-label">
                    Link 2
                  </label>
                  <input
                    type="text"
                    name="tagline"
                    id="tagline"
                    className="form-control"
                    placeholder="Enter Tagline"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="description" className="form-label">
                    Link Heading
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Enter Description"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="categoryName" className="form-label">
                    Link 3
                  </label>
                  <input
                    type="text"
                    name="tagline"
                    id="tagline"
                    className="form-control"
                    placeholder="Enter Tagline"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="description" className="form-label">
                    Link Heading
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Enter Description"
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
              <div className="card-title">Footer List</div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Tagline</th>
                      <th>Description</th>
                      <th>Link 1</th>
                      <th>Link 2</th>
                      <th>Link 3</th>
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

export default Footer;
