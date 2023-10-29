import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const descRef = useRef();

  const navigate = useNavigate();

  const addItem = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/crud/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleRef?.current?.value,
        image: imageRef?.current?.value,
        desc: descRef?.current?.value,
      }),
    });
    title.value = "";
    img.value = "";
    desc.value = "";
    navigate("/");
  };
  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter Title
          </label>
          <input
            type="text"
            ref={titleRef}
            className="form-control"
            id="title"
            name="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Enter Image Url
          </label>
          <input
            type="text"
            ref={imageRef}
            className="form-control"
            id="img"
            name="img"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Enter Description
          </label>
          <input
            type="text"
            ref={descRef}
            className="form-control"
            id="desc"
            name="desc"
          />
        </div>
        <button className="btn btn-primary" onClick={addItem}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
