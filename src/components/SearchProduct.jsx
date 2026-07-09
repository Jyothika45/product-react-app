import React from "react";
import NavBar from "./NavBar";

const SearchProduct = () => {
  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <div className="row">
          <div className="col-12">

            <label htmlFor="pcode" className="form-label">
              Product Code :
            </label>

            <input
              type="text"
              id="pcode"
              className="form-control"
              placeholder="Enter Product Code"
            />

            <br />

            <button className="btn btn-primary">
              SEARCH
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;