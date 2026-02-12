"use client"


import { Input } from "@/components/ui/input"
import { useState } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table"

export function DataTable({ columns, data }: any) {
  const [filterValue, setFilterValue] = useState("")
  const [rowSelection, setRowSelection] = useState({})


  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: filterValue,
      rowSelection,
    },
    onGlobalFilterChange: setFilterValue,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    
  })

  return (

    <div className="mb-4 p-3">
      <Input
        placeholder="جستجو بر اساس ایمیل..."
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        className="h-1/3"
      />
    </div>

  )
}
