import Link from "next/link";
import React from "react";
import S from "@/styles/common.module.scss";

const Header = () => {
  return (
    <header className={S.header}>
      <h1>
        <Link href="/">✏️ My Todo List</Link>
      </h1>
    </header>
  );
};

export default Header;
