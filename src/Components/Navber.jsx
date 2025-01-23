import Link from "next/link";
import React from "react";

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
const Navber =async () => {
  const {getUser} = getKindeServerSession();
const user = await getUser();

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>

      <li>
        <Link href={"/profile"}>Profile</Link>
      </li>
    </>
  );
  return (
    <div className="bg-blue-300">
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                  {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Next-Blog</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {
            user?<LogoutLink>Log out</LogoutLink>:<>
            <LoginLink className="btn">Sign in</LoginLink>
            <RegisterLink className="btn">Sign up</RegisterLink>
            </>
          }
        
        
        </div>
      </div>
    </div>
  );
};

export default Navber;
