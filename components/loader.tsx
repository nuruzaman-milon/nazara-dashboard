import { SyncLoader } from "react-spinners";

import React from "react";

const Loader = () => {
  return (
    <div className={`flex justify-center items-center w-full`}>
      <SyncLoader color="#820000" size={16} margin={5} />
    </div>
  );
};

export default Loader;
