import React, { useRef, useState } from "react";
import CustomContainer from "../ui/CustomContainer";
import emailjs from "@emailjs/browser";
import CustomAlert from "../ui/CustomAlert";
import { ToastifyType } from "../../types/toastifyTypes";

const SERVICE_ID =
  process.env.REACT_APP_YOUR_SERVICE_ID || "default_service_id";
const TEMPLATE_ID =
  process.env.REACT_APP_YOUR_TEMPLATE_ID || "default_template_id";
const PUBLIC_API_KEY =
  process.env.REACT_APP_YOUR_PUBLIC_API_KEY || "default_api_key";

export default function Contact() {
  const [alert, setAlert] = useState<{
    message: string;
    type: ToastifyType;
  } | null>(null);
  const form = useRef<HTMLFormElement | null>(null);

  const validateForm = (): boolean => {
    const name = form.current?.elements.namedItem("name") as HTMLInputElement;
    const email = form.current?.elements.namedItem("email") as HTMLInputElement;
    const message = form.current?.elements.namedItem(
      "textarea"
    ) as HTMLTextAreaElement;

    if (
      !name ||
      !email ||
      !message ||
      !name.value.trim() ||
      !email.value.trim() ||
      !message.value.trim()
    ) {
      setAlert({ message: "All fields are required.", type: "error" });
      return false;
    }

    // Prosta walidacja e-maila
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      setAlert({
        message: "Please enter a valid email address.",
        type: "error",
      });
      return false;
    }

    return true;
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_API_KEY) {
      setAlert({
        message: "There was a problem with email services",
        type: "error",
      });
      return;
    }

    if (form.current && validateForm()) {
      try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_API_KEY,
        });

        form.current.reset();
        setAlert({ message: "Email sent successfully!", type: "success" });
      } catch (error) {
        setAlert({
          message:
            "Something went wrong, please check if the form is filled correctly.",
          type: "error",
        });
      }
    }
  };

  return (
    <CustomContainer
      id="contact"
      title="QUESTIONS?"
      paragraph="Whether you’re curious about cooperation, features, works and prints for sale."
      styles="mb-5 mt-5"
    >
      {alert && <CustomAlert message={alert.message} type={alert.type} />}
      <form
        className="flex flex-col sm:w-2/4 max-w-screen-sm p-5"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col my-4">
          <label htmlFor="name" className="text-md font-medium text-slate-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="block w-full rounded-sm border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-yellow-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 outline-0"
            required
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="email" className="text-md font-medium text-slate-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="block w-full rounded-sm border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-yellow-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 outline-0"
            required
          />
        </div>
        <div>
          <label
            htmlFor="textarea"
            className="text-md font-medium text-slate-300"
          >
            Message
          </label>
          <textarea
            name="textarea"
            id="textarea"
            rows={5}
            maxLength={1000}
            className="block w-full max-h-fit rounded-sm border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-yellow-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 outline-0"
            required
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="mt-5 px-5 py-2 rounded-sm text-yellow-500 border border-yellow-500 hover:text-slate-50 hover:border-slate-50 hover:bg-yellow-500 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </CustomContainer>
  );
}
