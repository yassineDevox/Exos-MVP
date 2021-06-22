import React from "react";

const Spinner = () => {
  return (
    <div className="text-center p-4">
      <div
        className="spinner-border text-info"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
