"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Professor = {
  name: string
  email: string
  department: string
}

export const columns: ColumnDef<Professor>[] = [
  {
    accessorKey: "name",
    header: "نام استاد",
  },
  {
    accessorKey: "email",
    header: "ایمیل",
  },
  {
    accessorKey: "department",
    header: "دپارتمان",
  },
]
