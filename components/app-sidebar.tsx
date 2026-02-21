import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar dir="rtl" side="right" variant="floating">



      <SidebarContent >





      <SidebarMenuButton isActive>
        <Link href="/subjects">
            subjects
        </Link>
      </SidebarMenuButton>
      <SidebarMenuButton isActive>
        <Link href="/professors">
            professors
        </Link>
      </SidebarMenuButton>
      <SidebarMenuButton isActive>
        <Link href="/students">
            students
        </Link>
      </SidebarMenuButton>
      
        <SidebarGroup />

      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}