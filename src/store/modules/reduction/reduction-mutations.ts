import { Reduction } from '@/models/butler/Reduction';
import { MutationTree } from 'vuex';
import { ReductionState } from "./types";

export const mutations: MutationTree<ReductionState> = {
    setReduction(state, payload: Reduction[]) {
        state.reductions = payload
    },
};
