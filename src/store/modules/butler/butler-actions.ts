import { ActionTree } from 'vuex';
import { ButlerState } from "./types";
import { RootState } from "@/store/types"
import { ButlerService } from '@/services/butler.service';

export const actions: ActionTree<ButlerState, RootState> = {

    getRoles(context) {
        ButlerService.getInstance('').retrieveRole()
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
