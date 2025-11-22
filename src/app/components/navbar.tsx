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
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

import { Github, Menu } from "lucide-react";
import Link from "next/link";
import { link } from "fs";

interface NavItems {
  title: string;
  link: string;
}
const Navbar = () => {
  const NavItems: NavItems[] = [
    { link: "/professors", title: "اساتید" },
    { link: "/subjects", title: "دروس" },
  ];

  return (
    <>
      <nav className="hidden md:flex w-full h-[8dvh] z-10 mt-[4dvh] mb-[4dvh] items-center  justify-between px-12">
        <div className="flex justify-center items-center gap-4 ">
          <Link href={"/"}>
          <h1 className="font-extrabold text-4xl">استادبان</h1></Link>
          <div className="">
            <Logo />
          </div>
        </div>

        <div className="gap-5 flex">
          <div className="gap-4 flex items-center">
            <a className="p-2 rounded-sm hover:bg-[#222223] transition-colors" href="https://github.com/ostadbun">
              <Github/>
            </a>
            <div className="hover:bg-[#222223] rounded-sm">
            <AnimatedThemeToggler className="cursor-pointer p-2 rounded-sm transition-colors" />
            </div>
          </div>

          {NavItems.map((v, i) => {
            return(
              <Link key={i} href={v.link}>
              <Button key={i}>
              {v.title}
              </Button>
              </Link>
              )
          })}

          <Link href={"login"}>
            <Button variant={"secondary"} >

              ورود

            </Button>
          </Link>
          {/*<ModeToggle />*/}
        </div>
      </nav>

      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <div className="w-full justify-center flex items-center gap-5">
            <Logo />
            <p className="font-extrabold text-3xl">استادبان</p>
          </div>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>
            <div className=" w-full flex gap-5 flex-wrap justify-center">
              {NavItems.map((v, i) => {
                return (
                  <Link key={i} href={v.link}>
                    <Button className="w-10/12" key={i}>
                    {v.title}
                  </Button>
                  </Link>
                );
              })}
            </div>

            <SheetFooter>
              {/*<Button type="submit">Save changes</Button>*/}

              <div className="w-full gap-5 flex justify-center">
                <a>
                  <Github />
                </a>

                <AnimatedThemeToggler />
              </div>
              {/*<SheetClose asChild>
               <Button variant="outline">Close</Button>
             </SheetClose>*/}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
export default Navbar;
