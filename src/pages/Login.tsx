/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentHeader } from '@components';
import React from 'react';

const Login = () => {
  return (
    <div>
      <ContentHeader title="Banner" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Banner</h3>
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
                <button
                  type="button"
                  className="btn btn-tool"
                  data-widget="remove"
                  data-toggle="tooltip"
                  title="Remove"
                >
                  <i className="fa fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              Start creating your amazing application!
            </div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
