import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MENUITEMS } from "../../apollo/queries";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";
const MenuItemWrapper = ({ path }) => {
  const { data, loading, error } = useQuery(GET_MENUITEMS);

  if (loading) return <Loader />;
  if (error) alert(error.message);

  const menuItem = data.menuItems?.data;

  return (
    <div className="fixed h-screen w-full flex items-center justify-center bg-white">
      <ul className="flex flex-col gap-2 bg-black text-white text-xl p-4 text-center">
        {menuItem.map(({ attributes }) => {
          return (
            <li
              key={attributes.title}
              className={` transition-all duration-1000 ease-in-out ${
                attributes.title === "Homepage" &&
                path === "/" &&
                "opacity-0 invisible overflow-hidden h-0 -mt-2"
              } ${
                "/" + attributes.title.split(" ").join("-").toLowerCase() ===
                  path.toLowerCase() &&
                "opacity-0 invisible overflow-hidden h-0 -mt-2"
              }`}
            >
              <Link
                to={`${
                  attributes.title !== "Homepage"
                    ? "/" + attributes.title.split(" ").join("-").toLowerCase()
                    : "/"
                }`}
                className=""
              >
                {attributes.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItemWrapper;
