import React from "react";
import { Watch } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#eab308"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
