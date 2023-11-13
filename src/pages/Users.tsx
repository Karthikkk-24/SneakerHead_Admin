/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentHeader } from "@components";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {

    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        fetchAccessories();
    });

    function fetchAccessories() {
        axios
          .get("http://localhost:3000/api/getAccessories")
          .then((response) => {
            console.log(response.data[0]);
            setAccessories(response.data[0]);
          })
          .catch((error) => {
            console.log(error);
          });
    }


  return (
    <div>
      <ContentHeader title="User List" />
      <section className="content">
        <div className="container-fluid">
          
          <div className="card">
            <div className="card-header">
              <div className="card-title"></div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>User</th>
                      <th>Phone No.</th>
                      <th>Email ID</th>
                      <th>Last Login</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accessories.map((accessory, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{accessory.product_name}</td>
                        <td>{accessory.accessories_name}</td>
                        <td>{accessory.accessories_price}</td>
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

export default Users;
