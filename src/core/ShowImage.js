import React from "react";

const ShowImage = ({ item, url }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={`https://bookshelf-backend-0bnl.onrender.com/api/${url}/photo/${item._id}`}
        alt={item.name}
        className="h-72 w- rounded-lg shadow-md"
      />
    </div>
  );
};

export default ShowImage;
