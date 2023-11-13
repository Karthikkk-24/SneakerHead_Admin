/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentHeader } from "@components";
import React from "react";

const UserNotification = () => {
  return (
    <div>
      <ContentHeader title="User Notification" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Add User Notification</h3>
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
                <div className="col-md-12 row">
                    <div className="col-md-6 col-sm-12 form-group">
                        <label htmlFor="">Notification</label>
                        <input type="text" className="form-control" placeholder="Notification" />
                    </div>
                    <div className="col-md-6 col-sm-12 form-group">
                        <label htmlFor="">Description</label>
                        <input type="text" className="form-control" placeholder="Description" />
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary" type="Submit">Submit</button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Notification List</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Notification</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserNotification;
