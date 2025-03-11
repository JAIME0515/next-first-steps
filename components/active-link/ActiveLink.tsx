import Link from "next/link";
import React from "react";
import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  text: string;
}
// const a = " hover:underline hover:text-blue-400 mr-2 transition-all";
// const b = "text-blue-500";
export const ActiveLink = ({ path, text }: Props) => {
  return (
    <Link className={style.link} href={path}>
      {text}
    </Link>
  );
};
