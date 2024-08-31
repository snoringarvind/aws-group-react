import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const currentPath = usePathname();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Event Hub</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Movies</a>
          </li>
          <li>
            <Link
              href="/event"
              className={
                currentPath === "/event" ? "text-green-500 font-semibold" : ""
              }
            >
              Events
            </Link>
          </li>
          <li>
            <a>Streams</a>
          </li>
          <li>
            <a>Plays</a>
          </li>
          <li>
            <a>Sports</a>
          </li>
          <li>
            <a>Activities</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
