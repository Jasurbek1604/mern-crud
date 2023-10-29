import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("/api/crud")
      .then((res) => res.json())
      .then((res) => setData(res?.crud));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const onDelete = async (id) => {
    await fetch(`/api/crud/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };

  return (
    <>
      {data.map(({ _id, title, image, desc }) => (
        <div key={_id} className="card mb-3 mt-3">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <button
              onClick={() => onDelete(_id)}
              className="btn btn-danger px-4"
            >
              Delete
            </button>
            <button
              className="btn btn-primary mx-4 px-4"
              onClick={() => navigate(`/update/${_id}`)}
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
