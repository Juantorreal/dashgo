import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { Navlink } from "./NavLink";
import { NavSection } from "./NavSection";


export function SidebarNav() {
return (
    <Stack spacing="12" align="flex-start">
    <NavSection title="Geral">
 <Navlink icon={RiDashboardLine} href="/dashboard">DashBoard</Navlink>
 <Navlink icon={RiContactsLine} href="/users">Usuários</Navlink>
    </NavSection>
    <NavSection title="Automacão">
    <Navlink icon={RiInputMethodLine} href="/forms" >Formulários</Navlink>
    <Navlink icon={RiGitMergeLine} href="/automation" >Automação</Navlink>    
  </NavSection>
     </Stack>
);
}