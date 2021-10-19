import { ActionTree } from 'vuex';
import { SpaceState } from "./types";
import { RootState } from "@/store/types"
import { SpaceService } from '@/services/space.service';

export const actions: ActionTree<SpaceState, RootState> = {

    retrieveSpaces(context) {
        SpaceService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setSpace', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
}
