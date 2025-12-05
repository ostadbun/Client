"use client"

import { Button } from "@/components/ui/button";
import { th } from "framer-motion/client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Logo from "../components/logo";

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

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <defs>
                    <radialGradient
                      id="prefix__b"
                      cx="1.479"
                      cy="12.788"
                      fx="1.479"
                      fy="12.788"
                      r="9.655"
                      gradientTransform="matrix(.8032 0 0 1.0842 2.459 -.293)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".368" stopColor="#ffcf09" />
                      <stop offset=".718" stopColor="#ffcf09" stopOpacity=".7" />
                      <stop offset="1" stopColor="#ffcf09" stopOpacity="0" />
                    </radialGradient>

                    <radialGradient
                      id="prefix__c"
                      cx="14.295"
                      cy="23.291"
                      fx="14.295"
                      fy="23.291"
                      r="11.878"
                      gradientTransform="matrix(1.3272 0 0 1.0073 -3.434 -.672)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".383" stopColor="#34a853" />
                      <stop offset=".706" stopColor="#34a853" stopOpacity=".7" />
                      <stop offset="1" stopColor="#34a853" stopOpacity="0" />
                    </radialGradient>

                    <linearGradient
                      id="prefix__d"
                      x1="23.558"
                      y1="6.286"
                      x2="12.148"
                      y2="20.299"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".671" stopColor="#4285f4" />
                      <stop offset=".885" stopColor="#4285f4" stopOpacity="0" />
                    </linearGradient>

                    <clipPath id="prefix__a">
                      <path
                        d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z"
                        fill="none"
                      />
                    </clipPath>
                  </defs>

                  <path
                    d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z"
                    fill="#fc4c53"
                  />

                  <g clipPath="url(#prefix__a)">
                    <ellipse
                      cx="3.646"
                      cy="13.572"
                      rx="7.755"
                      ry="10.469"
                      fill="url(#prefix__b)"
                    />
                    <ellipse
                      cx="15.538"
                      cy="22.789"
                      rx="15.765"
                      ry="11.965"
                      transform="rotate(-7.12 15.539 22.789)"
                      fill="url(#prefix__c)"
                    />
                    <path
                      fill="url(#prefix__d)"
                      d="M11.105 8.28l.491 5.596.623 3.747 7.362 6.848 8.607-15.897-17.083-.294z"
                    />
                  </g>
                </svg>

                ورود با گوگل
              </Button>
            </a>
            <a className="w-full place-self-center" href="https://jpjukqmcfgpwtlaehajo.supabase.co/auth/v1/authorize?provider=twitter">
              <Button className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" fill={theme == "light" ? "white" : "black"} imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 462.799"><path fillRule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" /></svg>
                ورود با توییتر

              </Button>
            </a>
            <a className="w-full place-self-center" href="https://jpjukqmcfgpwtlaehajo.supabase.co/auth/v1/authorize?provider=github&redirect_to=http://localhost:4932/accept/">
              <Button className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" fill={theme == "light" ? "white" : "black"} height="64" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" /></svg>


                ورود با گیت هاب
              </Button>
            </a>
            <a className="w-full place-self-center" href="https://jpjukqmcfgpwtlaehajo.supabase.co/auth/v1/authorize?provider=gitlab">
              <Button className="w-full">
                <svg
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 113.2"

                  xmlSpace="preserve"
                >
                  <style type="text/css">
                    {".st0{fill:#EC672A;} .st1{fill:#DD3E2A;} .st2{fill:#F6A420;}"}
                  </style>
                  <g>
                    <path
                      className="st0"
                      d="M122.65,64.72l-6.89-21.15L102.15,1.61c-0.7-2.15-3.74-2.15-4.47,0L84.06,43.54H38.81L25.19,1.61 c-0.7-2.15-3.74-2.15-4.47,0L7.13,43.54L0.24,64.72c-0.62,1.92,0.05,4.04,1.7,5.24l59.5,43.23l59.5-43.23 C122.58,68.77,123.28,66.65,122.65,64.72L122.65,64.72z"
                    />
                    <polygon
                      className="st1"
                      points="61.45,113.17 61.45,113.17 84.08,43.54 38.82,43.54 61.45,113.17 61.45,113.17"
                    />
                    <polygon
                      className="st0"
                      points="61.43,113.17 38.81,43.54 7.13,43.54 61.43,113.17 61.43,113.17"
                    />
                    <path
                      className="st2"
                      d="M7.11,43.56L7.11,43.56L0.23,64.72c-0.62,1.92,0.05,4.04,1.7,5.24l59.5,43.23L7.11,43.56L7.11,43.56 L7.11,43.56z"
                    />
                    <path
                      className="st1"
                      d="M7.12,43.56h31.71L25.18,1.63c-0.7-2.15-3.74-2.15-4.47,0L7.12,43.56L7.12,43.56L7.12,43.56z"
                    />
                    <polygon
                      className="st0"
                      points="61.45,113.17 84.08,43.54 115.79,43.54 61.45,113.17 61.45,113.17"
                    />
                    <path
                      className="st2"
                      d="M115.76,43.56L115.76,43.56l6.89,21.15c0.62,1.92-0.05,4.04-1.7,5.24l-59.5,43.21L115.76,43.56L115.76,43.56 L115.76,43.56z"
                    />
                    <path
                      className="st1"
                      d="M115.78,43.56H84.07L97.69,1.63c0.7-2.15,3.74-2.15,4.47,0L115.78,43.56L115.78,43.56L115.78,43.56z"
                    />
                  </g>
                </svg>
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
              <Logo width={200} height={500}/>
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