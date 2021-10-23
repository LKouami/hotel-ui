import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { RoleState } from './types'
import { Role } from "@/models/butler/Role";


export const getters: GetterTree<RoleState, RootState> = {
    getRoles(state): Role[]{
        return state.role
    },
    getRolesMap(state): Map<string, string> | undefined{
        return state.roleMap
    },

};
