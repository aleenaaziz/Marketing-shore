import { linkList } from "@/constant/llinkList";
import Link from "next/link";
import React from "react";

const NavList = ({ mobile = false, horizontal = false }) => {
  return (
    <nav className={`navlist  ${mobile ? "mobile" : "desktop"} ${horizontal ? 'horizontal' : ''}`}>
      <ol>
        {linkList.map((data, ind) => (
          <li key={ind}>
            <Link href={data.link}>{data.title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default NavList;
