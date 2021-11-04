import { SpaceType } from '@/models/butler/SpaceType';
import { MutationTree } from 'vuex';
import { SpaceTypeState } from "./types";

export const mutations: MutationTree<SpaceTypeState> = {
    setSpaceType(state, payload: SpaceType[]) {
        state.space_type = payload
    },
    setSpaceTypeMap(state, payload: Map<string, string> | undefined) {
        state.space_typeMap = payload
        console.log(state.space_typeMap)
    }
};
