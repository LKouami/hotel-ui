import { ActionTree } from 'vuex';
import { UserState } from "./types";
import { RootState } from "@/store/types"
import { UserService } from '@/services/user.service';

export const actions: ActionTree<UserState, RootState> = {

    retrieveUsers(context) {
        UserService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setUser', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
}
