import { Button } from "@/components/ui/button";

import Logo from "./logo";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ModeToggle } from "./button";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full h-[8dvh] z-10 mt-[4dvh] mb-[4dvh] items-center flex justify-between px-12">
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
        <Button>دروس</Button>
        <Button>رشته ها</Button>
        <Button>اساتید</Button>
        <Button variant={"secondary"}>مسیب نژاد</Button>
        {/*<ModeToggle />*/}
      </div>
    </nav>
  );
};
export default Navbar;
