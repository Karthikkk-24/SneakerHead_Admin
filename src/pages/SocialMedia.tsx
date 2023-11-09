/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentHeader } from "@components";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SocialMedia = () => {
    const [facebookUsername, setFacebookUsername] = useState("");
    const [facebookLink, setFacebookLink] = useState("");
    const [twitterUsername, setTwitterUsername] = useState("");
    const [twitterLink, setTwitterLink] = useState("");
    const [instagramUsername, setInstagramUsername] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [websiteName, setWebsiteName] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");

    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetchSocialLinks();
    }, []);

    const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/addSocialMedia", {
        facebookUsername, facebookLink, twitterUsername, twitterLink, instagramUsername, instagramLink, websiteName, websiteUrl
      });
      window.location.reload();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

    function fetchSocialLinks() {
        axios
          .get("http://localhost:3000/api/getLinks")
          .then((response) => {
            console.log(response.data[0]);
            setLinks(response.data[0]);
          })
          .catch((error) => {
            console.log(error);
          });
    }


  return (
    <div>
      <ContentHeader title="Social Media" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Create Social Media Links</h3>
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
                    Facebook Username
                  </label>
                  <input type="text" value={facebookUsername} onChange={(e) => setFacebookUsername(e.target.value)} placeholder="Facebook Username" className="form-control" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="AccessoryName" className="form-label">
                    Facebook Link
                  </label>
                  <input
                    type="text"
                    name="facebook_link"
                    value={facebookLink} onChange={(e) => setFacebookLink(e.target.value)}
                    id="facebookLink"
                    placeholder="Enter Facebook Link"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="categoryName" className="form-label">
                    Instagram Username
                  </label>
                  <input type="text" placeholder="Instagram Username" value={instagramUsername} onChange={(e) => setInstagramUsername(e.target.value)} className="form-control" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="AccessoryName" className="form-label">
                    Instagram Link
                  </label>
                  <input
                    type="text"
                    name="instagram_link"
                    id="instagramLink"
                    placeholder="Enter Instagram Link" value={instagramLink} onChange={(e) => setInstagramLink(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="categoryName" className="form-label">
                    Twitter Username
                  </label>
                  <input type="text" placeholder="Twitter Username" value={twitterUsername} onChange={(e) => setTwitterUsername(e.target.value)} className="form-control" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="AccessoryName" className="form-label">
                    Twitter Link
                  </label>
                  <input
                    type="text"
                    name="twitter_link"
                    id="twitterLink"
                    placeholder="Enter Twitter Link" value={twitterLink} onChange={(e) => setTwitterLink(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="categoryName" className="form-label">
                    Website Name
                  </label>
                  <input type="text" placeholder="Website Name" value={websiteName} onChange={(e) => setWebsiteName(e.target.value)} className="form-control" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="AccessoryName" className="form-label">
                    Website Url
                  </label>
                  <input
                    type="text"
                    name="website_url"
                    id="websiteUrl"
                    placeholder="Enter Website Url" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Social Media List</div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Facebook</th>
                      <th>Instagram</th>
                      <th>Twitter</th>
                      <th>Website</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {links.map((link, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{link.facebook_username}<br />{link.facebook_link}</td>
                        <td>{link.instagram_username}<br />{link.instagram_link}</td>
                        <td>{link.twitter_username}<br />{link.twitter_link}</td>
                        <td>{link.website_name}<br />{link.website_url}</td>
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

export default SocialMedia;
