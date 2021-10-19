import { SpaceState } from '@/models/butler/SpaceState';
import { MutationTree } from 'vuex';
import { SpaceStateState } from "./types";

export const mutations: MutationTree<SpaceStateState> = {
    setSpaceState(state, payload: SpaceState[]) {
        state.space_state = payload
    },
};
