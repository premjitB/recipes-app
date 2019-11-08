import React, { Component } from "react";

export default class search extends Component {
  render() {
    const { handleChange, handleSubmit, search, recepis } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h1 className="text-center text-slanted text-capitalized">
              Recipes Search with{" "}
              <strong className="text-orange">Food2Fork</strong>
            </h1>
            <form className="mt-4" onSubmit={handleSubmit}>
              <label htmlFor="search text-capitalize text-center">
                type recipes seperated by comma
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  placeholder="chicken,mutton,biryani.."
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-primary text-white"
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
