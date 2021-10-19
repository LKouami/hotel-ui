import { ActionTree } from 'vuex';
import { RoleState } from "./types";
import { RootState } from "@/store/types"
import { RoleService } from '@/services/role.service';
import { Role } from '@/models/butler/Role';

export const actions: ActionTree<RoleState, RootState> = {

    retrieveRoles(context) {
        RoleService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setRole', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },

    sendRole(context, payload : Role) {
        const role : Role = new Role()
        role.name = payload.name
        role.createdAt = payload.createdAt
        role.modifiedAt = payload.modifiedAt
        
        console.log(role)
        return RoleService.getInstance('').sendRole(role)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    }
}
