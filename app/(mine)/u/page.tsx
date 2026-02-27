"use client"

import { api } from "@/app/api/base"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { FormEvent, useRef, useState } from "react"
import useSWR from "swr"


interface Entity {
    id: string
    name: string
    name_english: string
    city: string
    category: string
    image_url: string
    description: string
    description_english: string
    registered_by: string
    status: string
}

interface IEntity {
    university: Entity[]
}

const fetcher = (url: string) =>
    api.get(url).then((res) => res.data)

const Page = () => {
    const [endpoint, setEndpoint] = useState<string | null>(null)
    const ref = useRef<HTMLInputElement>(null)

    const { data, error, isLoading } = useSWR<IEntity>(
        endpoint ? endpoint : null,
        fetcher
    )

    const request = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const query = ref.current?.value?.trim()

        if (!query) return

        setEndpoint(`academic?university=${query}`)
    }

    return (
        <div >
            <div className="w-8/12 justify-center md:w-6/12 mx-auto mt-12 flex flex-wrap gap-4">
                <form onSubmit={request} className="flex gap-4 flex-wrap w-full">
                    <Input

                        ref={ref}
                        className="h-14 w-full"
                        placeholder="جست و جو در دانشگاه ها"
                    />
                    <Button type="submit" className="w-full">
                        جست و جو
                    </Button>
                </form>
            </div>

            {/* Loading */}
            {isLoading && (
                <div className="text-center mt-6">
                    loading...
                </div>
            )}

            {/* Error */}
            {error && (
                <div className="text-center mt-6 text-red-500">
                    error loading data
                </div>
            )}

            {/* Data */}
            {data && !isLoading && (
                <div className="mt-8 gap-4 text-center mx-auto w-8/12 grid justify-center grid-cols-4 ">
                    {data?.university?.length === 0 ? (
                        <div>no data</div>
                    ) : (
                        data?.university?.map((v) => (

                            <Card key={v.id} className=" flex justify-center">

                                <div >
                                    <h1 className="text-2xl">
                                        {v.name}
                                    </h1>
                                    <br />
                                    <p className="text-xs"> {v.city}</p>
                                    <br />
                                    <p className="text-xs">{v.description}</p>
                                    <br />
                                    <Image src={v.image_url} width={300} height={300} alt={v.name_english} />

                                    <br />
                                    {v.category}
                                    <br />

                                </div>

                                <Link href={`u/${v.id}`}>
                                    <Button className="w-fit">
                                        ورود به صفحه
                                    </Button>
                                </Link>
                            </Card>

                        ))
                    )}
                </div>
            )
            }
        </div >
    )
}

export default Page