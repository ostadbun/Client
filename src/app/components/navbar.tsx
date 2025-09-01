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

interface NavItems {
  title: string;
  link: string;
}
const Navbar = () => {
  const NavItems: NavItems[] = [
    { link: "a", title: "اساتید" },
    { link: "d", title: "دروس" },
    { link: "r", title: "رشته ها" },
  ];

  return (
    <>
      <nav className="hidden md:flex w-full h-[8dvh] z-10 mt-[4dvh] mb-[4dvh] items-center  justify-between px-12">
        <div className="flex justify-center items-center gap-4 ">
          <h1 className="font-extrabold text-4xl">استادبان</h1>
          <div className="">
            <Logo />
          </div>
        </div>

        <div className="gap-3 flex">
          <div className="gap-3 flex items-center">
            <a href="https://github.com/ostadbun">
              <Github />
            </a>

            <AnimatedThemeToggler className="cursor-pointer" />
          </div>

          {NavItems.map((v, i) => {
            return <Button key={i}>{v.title}</Button>;
          })}

          <Button variant={"secondary"}>مسیب نژاد</Button>
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
                  <Button className="w-10/12" key={i}>
                    {v.title}
                  </Button>
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
