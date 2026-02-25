"use client"

import { DataTable } from "@/components/data-table"
import { columns, Payment } from "./columns"
import LessonInfo from "./lessonInfo"
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
    <div className="container mx-auto py-6 space-y-6">
      <LessonInfo semesterInfo={6} level={2} />
      <DataTable columns={columns} data={data} />
      <DataTable columns={columns} data={data} />
    </div>
  )
}