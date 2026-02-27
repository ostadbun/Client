"use client"

import { DataTable } from "@/components/data-table"
import { columns, Payment } from "./columns"
import MajorsInfo from "./majorsInfo"

const data: Payment[] = [
    {id: 1,
    email: "ken99@example.com",
    amount: 316,
  },
  {
    id: 2,
    email: "abe45@example.com",
    amount: 242,
  },
  {
    id: 3,
    email: "monserrat44@example.com",
    amount: 837,
  },
  {
    id: 4,
    email: "silas22@example.com",
    amount: 874,
  },
  {
    id: 5,
    email: "carmella@example.com",
    amount: 721,
  },
]

export default function Page() {
  return (
    <div className=" mx-auto py-10">
      
      <MajorsInfo/>

      <div className="mx-auto max-w-screen-xl pt-24 grid grid-cols-2 gap-8">
        <DataTable columns={columns} data={data} />
        <DataTable columns={columns} data={data} />
      </div>

    </div>
  )
}