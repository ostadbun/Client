"use client";

import { Button } from "@/components/ui/button";
import Logo from "./logo";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Github, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItems {
  title: string;
  link: string;
}

const Navbar = () => {
  const pathName = usePathname();

  const NavItems: NavItems[] = [
    { link: "/universities", title: "دانشگاه ها" },
    { link: "/professors", title: "اساتید" },
    { link: "/subjects", title: "دروس" },
  ];

  return (
    <>
      <nav className="hidden md:flex w-full h-[8dvh] z-10 mt-[4dvh] mb-[4dvh] items-center justify-between px-12">

        <Link href={"/"} className="flex justify-center items-center gap-4">
          <Logo />
          <h1 className="font-extrabold text-4xl">استادبان</h1>
        </Link>

        <div className="gap-5 flex items-center">

          <div className="gap-4 flex items-center">
            <a
              className="p-2 rounded-sm dark:hover:bg-[#222223] hover:bg-gray-200 transition-colors"
              href="https://github.com/ostadbun"
            >
              <Github />
            </a>

            <div className="dark:hover:bg-[#222223] hover:bg-gray-200 rounded-sm">
              <AnimatedThemeToggler className="cursor-pointer p-2 rounded-sm transition-colors" />
            </div>
          </div>

          {NavItems.map((item) => {
            const active = pathName === item.link;

            return (
              <div key={item.link} className="flex flex-col items-center">
                <Link href={item.link}>
                  <Button
                    variant="ghost"
                    className={`
            text-base
            ${active ? "font-semibold text-neutral-900 dark:text-neutral-100" : ""}
          `}
                  >
                    {item.title}
                  </Button>
                </Link>



                <div className={`size-1 absolute translate-y-9 rounded-full mt-1 bg-neutral-900 transition-opacity duration-500 dark:bg-neutral-100 opacity-0 ${active && 'opacity-100'}`} />

              </div>
            );
          })}

          <Link href={"/login"}>
            <Button variant={"secondary"}>ورود</Button>
          </Link>
        </div>
      </nav>

      <div className="flex justify-between md:hidden">

        <div className=" justify-center flex items-center m-4 gap-4 ">
          <Logo />
          <Link href={"/"}>
            <p className="font-extrabold ml-10 text-3xl">استادبان</p>

          </Link>
        </div>
        <Sheet>
          <SheetTrigger>
            <Menu className="ml-5" />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>

            <div className="w-full flex gap-5 flex-wrap justify-center mt-6">
              {NavItems.map((item, i) => {
                return (
                  <Link key={i} href={item.link}>
                    <Button className="w-10/12">{item.title}</Button>
                  </Link>
                );
              })}
            </div>

            <SheetFooter>
              <div className="w-full gap-5 flex justify-center mt-4">
                <a>
                  <Github />
                </a>
                <AnimatedThemeToggler />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;