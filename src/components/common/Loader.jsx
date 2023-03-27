import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 z-40 h-screen w-full flex items-center justify-center bg-slate-800/10 backdrop-blur-sm">
      <div className="lds-hourglass z-50"></div>
    </div>
  );
};

export default Loader;
