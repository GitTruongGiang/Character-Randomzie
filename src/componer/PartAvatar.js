import React from "react";

function PartAvatar({ path, index, zIndex }) {
  return (
    <img
      src={`https://character-customization.netlify.app/character/${path}/${index}.png`}
      alt=""
      width={260}
      style={{ zIndex, position: "absolute", left: 0, top: 0 }}
    />
  );
}

export default PartAvatar;
