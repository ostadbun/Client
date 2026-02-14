import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar dir="rtl" side="right" variant="floating">



      <SidebarContent >
      <SidebarMenuButton isActive>
        <a href="#">Home</a>
      </SidebarMenuButton>

      <SidebarMenuButton isActive>
        <a href="#">Home</a>
      </SidebarMenuButton>

      <SidebarMenuButton isActive>
        <a href="#">Home</a>
      </SidebarMenuButton>

      <SidebarMenuButton isActive>
        <a href="#">Home</a>
      </SidebarMenuButton>

      
        <SidebarGroup />

      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}