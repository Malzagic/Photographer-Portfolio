import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PROPS {
  type: "info" | "success" | "warning" | "error";
  message: any;
}

export default function Notifications({ type, message }: PROPS) {
  toast[type](message);
  return (
    <div className="flex w-full h-full justify-center items-center">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
