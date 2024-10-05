import React from "react";

export default function CustomMainContainer({
  children,
  styles,
}: {
  children: any;
  styles?: string;
}) {
  return <main className={`${styles} px-4 my-5 py-5`}>{children}</main>;
}
