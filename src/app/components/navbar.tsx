import { Button } from "@/components/ui/button";

import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="w-full h-[8dvh]  mt-[4dvh] mb-[4dvh] items-center flex justify-between px-6">
      <div className="gap-3 flex">
        <Button variant={"secondary"}>فرح بخش</Button>
        <Button>دروس</Button>
        <Button>دروس</Button>
      </div>

      <div className="flex justify-center items-center gap-4 ">
        <h1 className="font-extrabold text-4xl">استادبان</h1>
        <div className="">
          <Logo />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
