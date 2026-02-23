import { DataTable } from "@/components/data-table"
import { columns, Payment } from "./columns"

async function getData(): Promise<Payment[]> {
  return [
    { status: "Success", email: "ken99@example.com", amount: 316 },
    { status: "Success", email: "abe45@example.com", amount: 242 },
    { status: "Processing", email: "monserrat44@example.com", amount: 837 },
    { status: "Success", email: "silas22@example.com", amount: 874 },
    { status: "Failed", email: "carmella@example.com", amount: 721 },
  ]
}

export default async function Page() {
  const data = await getData()
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}