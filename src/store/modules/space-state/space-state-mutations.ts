import { SpaceState } from '@/models/butler/SpaceState';
import { MutationTree } from 'vuex';
import { SpaceStateState } from "./types";

export const mutations: MutationTree<SpaceStateState> = {
    setSpaceState(state, payload: SpaceState[]) {
        state.space_state = payload
    },
    setSpaceStateMap(state, payload: Map<string, string> | undefined) {
        state.space_stateMap = payload
        console.log(state.space_stateMap)
    }
};
