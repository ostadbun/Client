"use client"

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export function DataTable({ columns, data }: any) {
  const [filterValue, setFilterValue] = useState("")

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: filterValue,
    },
    onGlobalFilterChange: setFilterValue,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
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
