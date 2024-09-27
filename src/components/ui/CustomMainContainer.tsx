import React from "react";

export default function CustomMainContainer({
  children,
  styles,
}: {
  children: any;
  styles?: string;
}) {
  return <main className={`${styles} px-4`}>{children}</main>;
}
