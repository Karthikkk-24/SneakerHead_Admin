/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentHeader } from "@components";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetchBanner();
  }, []);

  function fetchBanner() {
    axios
      .get("http://localhost:3000/api/getBanners")
      .then((response) => {
        console.log(response.data[0]);
        setBanners(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <ContentHeader title="Banner" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Create Banner</h3>
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
                <label htmlFor="bannerImage" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="banner_image"
                  id="bannerImage"
                />
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
              <div className="card-title">Banner List</div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Image</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {banners.map((banner, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><img style={{width: '400px', height: '200px'}} src={banner.banner_location} alt="" /></td>
                        <td>{banner.updated_at}</td>
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

export default Banner;
