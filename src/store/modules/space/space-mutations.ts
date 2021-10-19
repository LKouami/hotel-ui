import { Space } from '@/models/butler/Space';
import { MutationTree } from 'vuex';
import { SpaceState } from "./types";

export const mutations: MutationTree<SpaceState> = {
    setSpace(state, payload: Space[]) {
        state.space = payload
    },
};
