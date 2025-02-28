import React from "react";

/*
    I have refined this ProgressBar component to be template only moving out all logic to app component (container)
    This makes it reusable and it meets the single responsibility principal of SOLID principal
    Instead of modifying width dynamically  which requires browser to constantly re-paint when width changes
    Using transform and animation to give smooth loading user experience, it executes on a seperate thread than main thread i guess its called compositor thread.
*/
const ProgressBar = ({ progress }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "20px",
        width: "500px",
        border: "1px solid",
        margin: "50px",
      }}
    >
      <span
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: "99",
        }}
      >
        {progress}%
      </span>
      <div
        style={{
          // width: `${progress}%`,
          transform: `scaleX(${progress / 100})`,
          transformOrigin: "left",
          transition: "0.5s ease-in",
          backgroundColor: "lightgreen",
          height: "100%",
          textAlign: "center",
        }}
      />
    </div>
  );
};

export default ProgressBar;
