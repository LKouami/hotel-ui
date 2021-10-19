import { ActionTree } from 'vuex';
import { RoleState } from "./types";
import { RootState } from "@/store/types"
import { RoleService } from '@/services/role.service';

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
}
