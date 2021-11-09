import { ActionTree } from 'vuex';
import { SpaceStateState } from "./types";
import { RootState } from "@/store/types"
import { SpaceStateService } from '@/services/space-state.service';
import { SpaceState } from '@/models/butler/SpaceState';
import { Utils } from '@/common/core/utils';

export const actions: ActionTree<SpaceStateState, RootState> = {

    retrieveSpaceStates(context) {
        SpaceStateService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                    const mapBuilded : Map<string, string|unknown> = Utils.buildSpaceStateMap(value.data)
                    context.commit('setSpaceStateMap', mapBuilded)
                   context.commit('setSpaceState', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },

    sendSpaceState(context, payload : SpaceState) {
        const space_state : SpaceState = new SpaceState()
        space_state.name = payload.name
        space_state.createdAt = payload.createdAt
        space_state.modifiedAt = payload.modifiedAt
        
        console.log(space_state)
        return SpaceStateService.getInstance('').sendSpaceState(space_state)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    },

    updateSpaceState(context, payload : SpaceState) {
        const space_state : SpaceState = new SpaceState()
        space_state.id = payload.id
        space_state.name = payload.name
        space_state.createdAt = payload.createdAt
        space_state.modifiedAt = payload.modifiedAt
        
        console.log(space_state)
        return SpaceStateService.getInstance('').updateSpaceState(space_state)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    },
}
