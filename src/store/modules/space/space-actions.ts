import { ActionTree } from 'vuex';
import { RootState } from "@/store/types"
import { SpaceService } from '@/services/space.service';
import { Space } from '@/models/butler/Space';
import {SpaceState } from "@/store/modules/space/types";

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

    sendSpace(context, payload : Space) {
        const space : Space = new Space()
        space.name = payload.name
        space.location = payload.location;
        space.price = payload.price;
        space.comments = payload.comments;
        space.space_type_id = payload.space_type_id;
        space.space_state_id = payload.space_state_id;
        space.createdAt = payload.createdAt
        space.modifiedAt = payload.modifiedAt
        
        console.log(space)
        return SpaceService.getInstance('').sendSpace(space)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    },
}
