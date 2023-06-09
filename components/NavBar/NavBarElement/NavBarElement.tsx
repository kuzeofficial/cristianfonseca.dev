import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface INavBarElement {
  text: string;
  icon: JSX.Element;
  destination: string;
}
export const NavBarElement = ({ destination, icon, text }: INavBarElement) => {
  const pathName = usePathname();
  return (
    <Link
      href={destination}
      className={`dark:hover:bg-[#515151] justify-center hover:bg-gray-200 hover:transition-all text-sm hover:duration-300 hover:rounded-md cursor-pointer flex  flex-row px-2 py-1 items-stretch ${
        pathName === destination
          ? "text-primary-100 dark:text-primary-10 font-bold"
          : "text-primary-50 dark:text-primary-40/95 font-normal"
      }`}
    >
      {icon}
      {text}
    </Link>
  );
};
