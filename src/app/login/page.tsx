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
import Link from "next/link";

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
      title: "گـوگـــــل",
      target: 'google'
    },
    {
      icon: <Github />,
      title: "گیت‌هاب",
      target: 'github'
    },
    {
      icon: <Twitter />,
      title: "تـــــوییتر",
      target: 'twitter'
    },
    {
      icon: <Gitlab />,
      title: "گـــیت‌لب",
      target: 'gitlab'
    }



  ]



  return <>


    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex border-[0.5px] dark:border-gray-600 rounded-xl justify-center w-10/12 h-10/12 gap-4"
      >
        {/*  */}
        <div className="  justify-center gap-y-12 flex flex-col items-center w-6/12">
          <div className="w-72 mt-[8.27rem] flex flex-col gap-y-3 ">
            {Providers.map((a, b) => (
              <div key={b}>
                <a className="w-full " href={Provider(a.target)}>
                  <Button className="w-full ">
                    <div className="flex justify-between items-center  gap-2 w-6/12">

                      {a.icon}
                      ورود با {a.title}
                    </div>
                  </Button>
                </a>
              </div>
            ))}
          </div>



          <div className="w-8/12 ">
            <div className="w-full h-[.01rem] mb-6 bg-gray-400"></div>

            <h3>
              سیستم منبع باز است و هیج شخصی هیچ مسئولیتی در قبال هیچ چیزی ندارد.
            </h3>
          </div>

        </div>


        <div className="w-[.01rem] h-full bg-gray-400"></div>

        {/*  */}
        <div className="w-6/12 flex justify-center items-center flex-wrap flex-col gap-y-12">

          <div className="opacity-85 w-full relative ">
            <Link href="/" >
              <Logo size={6} />
            </Link>
            <p className="font-extrabold text-center text-4xl dark:text-gray-200 absolute translate-y-5 w-full text-gray-700" >
              استادبان</p>
          </div>
          <div className="w-8/12 h-[.01rem] bg-gray-400"></div>
          <h1 className="w-8/12 ">
            با ورود شما، اطلاعات داده شده به‌صورت امن ذخیره می‌شود و فقط برای بهبود تجربه‌ی کاربری استفاده خواهد شد.
          </h1>

        </div>

      </div>
    </div >


  </>;
};
export default Show;