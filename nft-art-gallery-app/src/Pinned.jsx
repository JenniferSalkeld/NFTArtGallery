import React, { useEffect, useState } from "react";
import { dataToDisplay } from "./Components/data";
import { useNavigate } from "react-router-dom";

const Pinned = () => {
  let navigate = useNavigate();
  const [myPins, SetMyPins] = useState([]);
  useEffect(() => {
    let b = localStorage.getItem("photos");
    let a = JSON.parse(b);
    let filtered = dataToDisplay.filter((e) => a.indexOf(e.id) > -1);
    SetMyPins(() => [...filtered]);
  }, []);
  return (
    <div className="pinned-wrapper">
      <h1 className="titles">My Pins</h1>
      <button className="btn-home" onClick={() => navigate("/")}>
        Back To Home
      </button>
      <div className="content-wrapper">
        {myPins.map((e) => (
          <div className="imageWrapper">
            <img src={e.image} alt="is" className="nftimg" />
            <p className="imgT">{e.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pinned;
