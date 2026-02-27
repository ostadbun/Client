"use client"

import { DataTable } from "@/components/data-table"
import { columns, Payment } from "./columns"
import ProfessorsInfo from "./professorsInfo"

const data: Payment[] = [
  {
    status: "success",
    email: "ken99@example.com",
    amount: 316,
  },
  {
    status: "success",
    email: "abe45@example.com",
    amount: 242,
  },
  {
    status: "processing",
    email: "monserrat44@example.com",
    amount: 837,
  },
  {
    status: "success",
    email: "silas22@example.com",
    amount: 874,
  },
  {
    status: "failed",
    email: "carmella@example.com",
    amount: 721,
  },
]

export default function Page() {
  return (
    <div className=" mx-auto py-10">
      
      <ProfessorsInfo
        imageSrc="https://blog.faradars.org/wp-content/uploads/2024/12/siavash-shahshahani.jpg"
        teachingYears={4}
        address="lahijan"
        major="computer"
        degree="12"
        university="sharif"
      />

      <div className="mx-auto max-w-screen-xl px-6 grid grid-cols-2 gap-8">
        <DataTable columns={columns} data={data} />
        <DataTable columns={columns} data={data} />
      </div>

    </div>
  )
}