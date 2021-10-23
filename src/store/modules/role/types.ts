import { Role } from "@/models/butler/Role";

export interface RoleState {
    role: Role[] 
    roleMap: Map<string, string> | undefined
}
