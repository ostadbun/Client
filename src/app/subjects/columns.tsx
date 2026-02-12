"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Professor = {
  name: string
  email: string
  department: string
}

export const columns: ColumnDef<Professor>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        onChange={(e) =>
          table.toggleAllPageRowsSelected(e.target.checked)
        }
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(e.target.checked)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

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



