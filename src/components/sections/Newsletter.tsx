import React from "react";
import CustomContainer from "../ui/CustomContainer";

export default function Newsletter() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <CustomContainer
      title="Newsletter"
      paragraph="Stay updated with our latest news and exclusive offers. Subscribe now!"
    >
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center w-full mb-5 pb-5"
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="px-4 py-2 outline-none rounded-l-sm w-2/4"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-slate-100 hover:text-yellow-500 py-2 px-4 rounded-e-sm transition-all"
        >
          Send
        </button>
      </form>
    </CustomContainer>
  );
}
