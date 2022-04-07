import React from "react";

function PartListAvatar({ total, set, path }) {
  let ListAvatar = [];
  for (let i = 1; i < total; i++) {
    ListAvatar.push(
      <img
        src={`https://character-customization.netlify.app/character/${path}/${i}.png`}
        alt=""
        height={60}
        onClick={() => set(i)}
        className="square"
      />
    );
  }
  return <div className="list">{ListAvatar}</div>;
}

export default PartListAvatar;
