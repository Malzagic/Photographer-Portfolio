import React from "react";

type PROPS = {
  children: any;
  styles?: string;
  titleStyles?: string;
  paragraphStyles?: string;
  title: string;
  paragraph: string;
  id?: string;
};

export default function CustomContainer({
  children,
  styles,
  titleStyles,
  paragraphStyles,
  title,
  paragraph,
  id,
}: PROPS) {
  return (
    <div
      id={id ? id : ""}
      className={`${
        styles ? styles : ""
      } flex flex-col justify-center items-center bg-gray-900 p-5 mx-5`}
    >
      <h2
        className={`${
          titleStyles ? titleStyles : ""
        } text-5xl text-center text-yellow-500 font-bold my-5`}
      >
        {title}
      </h2>
      <p
        className={`${
          paragraphStyles ? paragraphStyles : ""
        } text-lg text-slate-300 font-semibold my-5`}
      >
        {paragraph}
      </p>
      {children}
    </div>
  );
}
