import React from "react";
import pic from "../img/Hash.jpg";

function Home() {
  const styl = {
    width: "18rem", 
    borderRadius: "100%",
  };

  return (
    <>
    <div className="d-flex justify-content-center" >
      
      <div className="card">
        <img src={pic} className="card-img-top" style={styl} alt="..." />
        <div className="card-body">
          <p className="card-text">
            Hashim's React Portfolio
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;

