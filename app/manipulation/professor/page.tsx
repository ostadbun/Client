"use client"

import { useEffect, useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { Plus, X } from "lucide-react"
import { sileo } from "sileo"
import axios from "axios"
import { api } from "@/app/api/base"

type Education = {
    degree: string
    university: string
    field: string
}

type FormValues = {
    name: string
    name_english: string
    description: string
    description_english: string
    image_url: string
    experienceYears: number
    education_history: Education[]
}

export default function Page() {
    const degrees = ["کارشناسی", "کارشناسی ارشد", "دکترا"]

    const { register, control, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            education_history: [],
        },
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "education_history",
    })

    // 🔹 state موقت برای آیتم جدید
    const [tempEducation, setTempEducation] = useState<Education>({
        degree: "",
        university: "",
        field: "",
    })

    const onSubmit = (data: FormValues) => {
        if (data.education_history.length < 1) {
            sileo.error({
                title: 'تحصیلات نباید خالی باشد',
            })
        } else {



            api.post("/manipulation/professor", data).then(s => {
                console.log(s.data)
                sileo.success({
                    title: 'با موفقیت به لیست معلق ها اضاف شد !'
                })
            })

        }
    }


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-8/12 mx-auto space-y-6"
        >
            <h2 className="text-3xl font-extrabold text-center">
                ثبت استاد
            </h2>

            <Input placeholder="نام درس" {...register("name", { required: true })} />
            <Input placeholder="نام انگلیسی" {...register("name_english", { required: true })} />
            <Textarea placeholder="توضیحات" {...register("description", { required: true })} />
            <Textarea placeholder="توضیحات انگلیسی" {...register("description_english", { required: true })} />
            <Input placeholder="آدرس عکس" {...register("image_url", { required: true })} />

            <Input
                type="number"
                placeholder="سابقه (سال)"
                {...register("experienceYears", { valueAsNumber: true, required: true })}
            />

            {/* ===== EDUCATIONS ===== */}

            <div>
                <h3 className="text-xl font-bold mb-4">تحصیلات</h3>

                {/* لیست ثبت شده‌ها */}
                <div className="flex gap-3 flex-wrap mb-4">
                    {fields.map((item, index) => (
                        <Badge key={item.id} className="flex items-center gap-2">
                            {item.degree} | {item.university}
                            <X
                                className="cursor-pointer w-4 h-4"
                                onClick={() => remove(index)}
                            />
                        </Badge>
                    ))}
                </div>

                {/* فرم افزودن */}
                <div className="grid md:grid-cols-3 gap-4">
                    <Combobox
                        items={degrees}
                        onValueChange={(val) =>
                            setTempEducation((prev: Education) => ({
                                ...prev,
                                degree: val as string,
                            }))
                        }
                    >
                        <ComboboxInput placeholder="مقطع تحصیلی" />
                        <ComboboxContent>
                            <ComboboxEmpty>موردی یافت نشد</ComboboxEmpty>
                            <ComboboxList>
                                {(item) => (
                                    <ComboboxItem key={item} value={item}>
                                        {item}
                                    </ComboboxItem>
                                )}
                            </ComboboxList>
                        </ComboboxContent>
                    </Combobox>

                    <Input
                        placeholder="دانشگاه"
                        value={tempEducation.university}
                        onChange={(e) =>
                            setTempEducation((prev) => ({
                                ...prev,
                                university: e.target.value,
                            }))
                        }
                    />

                    <Input
                        placeholder="رشته"
                        value={tempEducation.field}
                        onChange={(e) =>
                            setTempEducation((prev) => ({
                                ...prev,
                                field: e.target.value,
                            }))
                        }
                    />
                </div>

                <div className="mt-4">
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => {
                            if (
                                !tempEducation.degree ||
                                !tempEducation.university ||
                                !tempEducation.field
                            )
                                return

                            append(tempEducation)

                            // reset temp
                            setTempEducation({
                                degree: "",
                                university: "",
                                field: "",
                            })
                        }}
                    >
                        <Plus />
                    </Button>
                </div>
            </div>

            <Button type="submit" className="w-full">
                ثبت
            </Button>
        </form>
    )
}