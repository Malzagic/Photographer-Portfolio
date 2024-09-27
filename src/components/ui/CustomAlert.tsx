import React, { useEffect } from "react";

import { Flip, ToastContainer, toast } from "react-toastify";
import { ToastifyType } from "../../types/toastifyTypes";

import "react-toastify/dist/ReactToastify.css";

// Komponent do niestandardowego alertu
export default function CustomAlert({
  message,
  type,
}: {
  message: string;
  type: ToastifyType;
}) {
  useEffect(() => {
    // Automatycznie wyświetlaj powiadomienie po zamontowaniu komponentu
    toast(message, {
      type,
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Flip,
    });
  }, [message, type]); // Uruchomienie powiadomienia przy każdej zmianie message lub type

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
