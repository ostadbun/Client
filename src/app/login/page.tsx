"use client"

import { Button } from "@/components/ui/button";
import { div, th } from "framer-motion/client";
import { useTheme } from "next-themes";
import { JSX, useEffect, useState } from "react";
import Logo from "../components/logo";
import { Google } from "../components/icons/google";
import { Twitter } from "../components/icons/twitter";
import { Gitlab } from "../components/icons/gitlab";
import { Github } from "../components/icons/github";

const Show = () => {

  const [theme, settheme] = useState<string>("")

  const Coretheme = useTheme()

  useEffect(() => {

    if (Coretheme.theme) settheme(Coretheme.theme)
  }, [Coretheme])


  const Provider = (provider: string): string => {
    const url = `https://jpjukqmcfgpwtlaehajo.supabase.co/auth/v1/authorize?provider=${provider}&redirect_to=http://localhost:4932/accept/`
    return url
  }




  const Providers: { icon: JSX.Element, title: string, target: string }[] = [

    {
      icon: <Google />,
      title: "گوگل",
      target: 'google'
    },
    {
      icon: <Github />,
      title: "گیت هاب",
      target: 'github'
    },
    {
      icon: <Twitter />,
      title: "توییتر",
      target: 'twitter'
    },
    {
      icon: <Gitlab />,
      title: "گیت لب",
      target: 'gitlab'
    }



  ]



  return <>


    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex justify-center w-10/12 h-10/12 ">
        <div className="bg-red-600 flex justify-center flex-1">
          <div className="w-72 justify-center h-auto flex-wrap bg-black ">



            {Providers.map((a, b) => {
              return (
                <div key={b}>
                  <a className="w-full place-self-center" href={Provider(a.target)}>
                    <Button className="w-full">
                      {a.icon}
                      ورود با {a.title}
                    </Button>
                  </a>
                </div>
              )
            })}



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

    </div >


  </>;
};

export default Show;
// 



// 123SMDuwh@@#@Q!