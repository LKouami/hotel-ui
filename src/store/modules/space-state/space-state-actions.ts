import { ActionTree } from 'vuex';
import { SpaceStateState } from "./types";
import { RootState } from "@/store/types"
import { SpaceStateService } from '@/services/space-state.service';

export const actions: ActionTree<SpaceStateState, RootState> = {

    retrieveSpaceStates(context) {
        SpaceStateService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setSpaceState', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
}
