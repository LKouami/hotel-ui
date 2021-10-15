import { ActionTree } from 'vuex';
import { SpaceTypeState } from "./types";
import { RootState } from "@/store/types"
import { SpaceTypeService } from '@/services/space-type.service';

export const actions: ActionTree<SpaceTypeState, RootState> = {

    retrieveSpaceTypes(context) {
        SpaceTypeService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setSpaceType', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
}
