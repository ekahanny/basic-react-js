import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgSrc={props.imgSrc} />
        </div>
        <div className="bottom">
          {/* create a new components which has the same className */}
          <Detail detailInfo={props.telp} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
