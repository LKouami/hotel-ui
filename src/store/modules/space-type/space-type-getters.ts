import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { SpaceTypeState } from './types'
import { SpaceType } from "@/models/butler/SpaceType";


export const getters: GetterTree<SpaceTypeState, RootState> = {
    getSpaceTypes(state): SpaceType[]{
        return state.space_type
    },

};
