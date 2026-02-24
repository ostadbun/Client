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
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"
import useCities from "@/hooks/usecities"


const page = () => {


    const c = usehardness()
    const cities = useCities()

    const cetegories = [
        'دولتی',
        'آزاد',
        'غیر انتفاعی',
        'پیام نور'
    ]


    return (

        <div className="w-8/12  mx-auto">






            <div className="mb-3 mt-6">
                <h2
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-center bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >
                    ثبت دانشگاه جدید

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


                    شهر

                </p>
            </div>

            <Combobox items={cities}>
                <ComboboxInput placeholder="شهر را انتخاب کنید" />
                <ComboboxContent>
                    <ComboboxEmpty>موردی یافت نشد.</ComboboxEmpty>
                    <ComboboxList>
                        {(item) => (
                            <ComboboxItem key={item} value={item}>
                                {item}
                            </ComboboxItem>
                        )}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>




            <div className="mb-3 mt-6">
                <p
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >


                    دسته بندی

                </p>
            </div>

            <Combobox items={cetegories}>
                <ComboboxInput placeholder="نوع دانشگاه خود را انتخاب کنید" />
                <ComboboxContent>
                    <ComboboxEmpty>موردی یافت نشد.</ComboboxEmpty>
                    <ComboboxList>
                        {(item) => (
                            <ComboboxItem key={item} value={item}>
                                {item}
                            </ComboboxItem>
                        )}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>



            <div className="mb-3 mt-6">
                <p
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >


                    آدرس عکس

                </p>
            </div>


            <Input />



        </div>
    )
}



export default page