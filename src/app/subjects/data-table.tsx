"use client"

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table"

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
    <div>
      {/* 🧩 فیلتر بر اساس ایمیل */}
      <div className="mb-4">
        <Input
          placeholder="جستجو بر اساس ایمیل..."
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          className="min-w-xs "
        />
      </div>
    </div>
  )
}
