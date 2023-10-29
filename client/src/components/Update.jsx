import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});

  const fetchData = async () => {
    await fetch(`https://mern-crud-5y9l.onrender.com/api/crud/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res?.crud));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const titleRef = useRef();
  const imgRef = useRef();
  const descRef = useRef();

  const updateData = async (e) => {
    e.preventDefault();
    await fetch(`https://mern-crud-5y9l.onrender.com/api/crud/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        image: imgRef.current.value,
        desc: descRef.current.value,
      }),
    });
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
            defaultValue={data?.title}
            className="form-control"
            id="title"
            name="title"
            ref={titleRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Enter Image Url
          </label>
          <input
            type="text"
            defaultValue={data?.image}
            className="form-control"
            id="img"
            name="img"
            ref={imgRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Enter Description
          </label>
          <input
            type="text"
            defaultValue={data.desc}
            className="form-control"
            id="desc"
            name="desc"
            ref={descRef}
          />
        </div>
        <button onClick={updateData} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
