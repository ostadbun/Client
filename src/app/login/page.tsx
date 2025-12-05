"use client"

import { Button } from "@/components/ui/button";
import { th } from "framer-motion/client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Logo from "../components/logo";
import { Google } from "../components/icons/google";
import { Twitter } from "../components/icons/twitter";
import { Gitlab } from "../components/icons/gitlab";

const Show = () => {

  const [theme, settheme] = useState<string>("")

  const Coretheme = useTheme()

  useEffect(() => {

    if (Coretheme.theme) settheme(Coretheme.theme)
  }, [Coretheme])



  return <>


    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex justify-center w-10/12 h-10/12 ">
        <div className="bg-red-600 flex justify-center flex-1">
          <div className="w-72 justify-center h-auto flex-wrap bg-black ">
            <a className="w-full place-self-center" href='https://jpjukqmcfgpwtlaehajo.supabase.co/auth/v1/authorize?provider=google&redirect_to=http://localhost:4932/accept/'>
              <Button className="w-full">

                <Google />

                ورود با گوگل
              </Button>
            </a>
            <a className="w-full place-self-center" href="https://jpjukqmcfgpwtlaehajo.supabase.co/auth/v1/authorize?provider=twitter">
              <Button className="w-full">
                <Twitter />
                ورود با توییتر

              </Button>
            </a>
            <a className="w-full place-self-center" href="https://jpjukqmcfgpwtlaehajo.supabase.co/auth/v1/authorize?provider=github&redirect_to=http://localhost:4932/accept/">
              <Button className="w-full">


                ورود با گیت هاب
              </Button>
            </a>
            <a className="w-full place-self-center" href="https://jpjukqmcfgpwtlaehajo.supabase.co/auth/v1/authorize?provider=gitlab">
              <Button className="w-full">
                <Gitlab />
                ورود با گیت لب
              </Button>
            </a>
            {/* <hr className="mt-[1vh] border-gray-300" /> */}
            {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sunt? Laboriosam nisi veniam quisquam mollitia, ratione aliquam reiciendis. Doloremque porro sunt quibusdam quasi, perferendis ipsam iure repellendus perspiciatis incidunt hic.</h1> */}
          </div>
        </div>
        {/* <hr className="h-full w-1 border-gray-300" /> */}
        <div className="  flex-1">
          <div className="justify-center grid mt-[7vh]">
            <Logo width={200} height={500} />
            <h1 className="mt-[5vh]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nisi, quia sit nam eaque, in quaerat praesentium veniam vero est unde fugit voluptatum rem eius dolorem nostrum ab ut? Magni.
            </h1>
          </div>
        </div>
      </div>

    </div>


  </>;
};

export default Show;
// 



// 123SMDuwh@@#@Q!