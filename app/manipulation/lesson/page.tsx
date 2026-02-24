"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import usehardness from "@/hooks/use-hardness"


const page = () => {


    const c = usehardness()

    return (

        <div className="w-8/12  mx-auto">






            <div className="mb-3 mt-6">
                <h2
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-center bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >
                    ثبت درس جدید

                </h2>
            </div>






            <div className="mb-3 mt-6">
                <p
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >
                    نام درس

                </p>
            </div>

            <Input />


            <div className="mb-3 mt-6">
                <p
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >


                    نام انگلیسی
                </p>
            </div>
            <Input />


            <div className="mb-3 mt-6">
                <p
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >



                </p>


            </div>




            <div className="mb-3 mt-6">
                <p
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >


                    توضیحات

                </p>
            </div>

            <Textarea />

            <div className="mb-3 mt-6">
                <p
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >


                    توضیحات انگلیسی

                </p>
            </div>
            <Textarea />

            <div className="mb-3 mt-6">
                <p
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >


                    سختی

                </p>
            </div>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="انتخاب سختی" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {[1, 2, 3, 4, 5].map((i) => {
                            return (
                                <SelectItem key={i} value={i}>{c(i)}</SelectItem>
                            )
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>



            <div className="mb-3 mt-6">
                <p
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >


                    ترم

                </p>
            </div>

            <Input type="number" min={1} max={10} />




        </div>
    )
}



export default page