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
import { Field, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { Card } from "@/components/ui/card"
import { ExampleWrapper } from "@/components/example"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Professor_educationHistory } from "@/app/entity/entity"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"
import { Badge } from "@/components/ui/badge"


const page = () => {





    // const a: Professor_educationHistory

    const degrees = [

        "کارشناسی",
        "کارشناسی ارشد",
        "دکترا",

    ]
    return (

        <div className="w-8/12  mx-auto ">



            <div className="mb-3 mt-6">
                <h2
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-center bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >
                    ثبت استاد جدید

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
                    آدرس عکس
                </p>
            </div>
            <Input />



            <div className="mb-3 mt-6">
                <p
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >




                    سابقه

                </p>
            </div>

            <Field>

                <InputGroup>
                    <InputGroupAddon align="inline-end">
                        <InputGroupText>سال</InputGroupText>
                    </InputGroupAddon>
                    <InputGroupInput type="number" placeholder="3" />

                </InputGroup>
            </Field>



            {/* <div className="border border-dashed "> */}


            <div className="mb-3 mt-6 flex items-center gap-x-4">
                <p
                    className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >


                    تحصیلات


                </p>


                <div className="my-6 gap-x-4 flex">


                    <Badge >کارشناسی ارشد | تهران</Badge>
                    <Badge >کارشناسی ارشد | تهران</Badge>
                    <Badge >کارشناسی ارشد | تهران</Badge>

                </div>

            </div>






            <div className="md:grid md:grid-cols-3 flex flex-wrap justify-between w-full gap-16">

                <Combobox items={degrees} >
                    <ComboboxInput placeholder="مقطع تحصیلی" />
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


                <InputGroup>
                    <InputGroupAddon align="inline-start">
                        <InputGroupText>دانشگاه</InputGroupText>
                        <InputGroupInput placeholder="شریف" />
                    </InputGroupAddon>


                </InputGroup>

                <InputGroup>
                    <InputGroupAddon align="inline-start">
                        <InputGroupText>رشته</InputGroupText>
                        <InputGroupInput placeholder="مهندسی کامپیوتر" />
                    </InputGroupAddon>


                </InputGroup>

            </div>
            <div className="my-6">
                <Button variant="outline" size="icon">
                    <Plus />
                </Button>

            </div>



        </div>
    )
}



export default page