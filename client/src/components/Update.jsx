import React from "react";

const Update = () => {
  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter Title
          </label>
          <input type="text" className="form-control" id="title" name="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Enter Image Url
          </label>
          <input type="text" className="form-control" id="img" name="img" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Enter Description
          </label>
          <input type="text" className="form-control" id="desc" name="desc" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
