import { ActionTree } from 'vuex';
import { SpaceTypeState } from "./types";
import { RootState } from "@/store/types"
import { SpaceTypeService } from '@/services/space-type.service';
import { SpaceType } from '@/models/butler/SpaceType';
import { Utils } from '@/common/core/utils';

export const actions: ActionTree<SpaceTypeState, RootState> = {

    retrieveSpaceTypes(context) {
        SpaceTypeService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                    const mapBuilded : Map<string, string|unknown> = Utils.buildSpaceTypeMap(value.data)
                    context.commit('setSpaceTypeMap', mapBuilded)
                   context.commit('setSpaceType', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
    sendSpaceType(context, payload : SpaceType) {
        const space_type : SpaceType = new SpaceType()
        space_type.name = payload.name
        space_type.createdAt = payload.createdAt
        space_type.modifiedAt = payload.modifiedAt
        
        console.log(space_type)
        return SpaceTypeService.getInstance('').sendSpaceType(space_type)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    },
}
