/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentHeader } from "@components";
import React from "react";

const Orders = () => {
  return (
    <div>
      <ContentHeader title="Orders" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Orders</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Order No</th>
                      <th>Ordered By</th>
                      <th>Order Date</th>
                      <th>Delivery Date</th>
                      <th>Status</th>
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

export default Orders;
