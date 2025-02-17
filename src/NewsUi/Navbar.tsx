"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { LucideSearch } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { SlSocialYoutube } from "react-icons/sl";
import navItems from "../utils/navData";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="h-[130px] w-ful border-b-2 border-gray-50/50 flex items-center ">
          <div className="max-w-screen-2xl mx-auto flex w-full items-center  md:justify-between px-10">
            {/* left side  */}
            <div className="flex items-center gap-5 ">
              <button>
                <RxDashboard className="size-7" />
              </button>
              <Separator
                orientation="vertical"
                className="bg-white h-7 hidden md:block"
              />
              <button className="hidden md:block">
                <LucideSearch />
              </button>
            </div>
            {/* left side  */}
            <div className="w-full text-center">
              <h2 className="text-[40px] md:text-[55px] lg:text-[70px]   xl:text-[80px] uppercase font-extrabold">
                Orange Time
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-5">
              <FaXTwitter className="size-7 cursor-pointer" />
              <IoLogoInstagram className="size-8 cursor-pointer" />
              <SlSocialYoutube className="size-8 cursor-pointer" />
            </div>
          </div>
        </nav>
        <div className="max-w-screen-2xl mx-auto flex w-full items-center  md:justify-between px-10">
          <ScrollArea>
            <ul className="py-5 flex items-center justify-center w-full gap-10">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-[18px] md:text-[20px] font-normal  "
                >
                  <Link
                    href={`/`}
                    className={`${
                      item.isActive ? "border-b pb-3 font-bold" : ""
                    } hover:border-b pb-3 hover:font-bold cursor-pointer transition-all ease-linear duration-150`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </header>
    </>
  );
};

export default Navbar;
