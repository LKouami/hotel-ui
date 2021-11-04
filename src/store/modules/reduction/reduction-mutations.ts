import { Reduction } from '@/models/butler/Reduction';
import { MutationTree } from 'vuex';
import { ReductionState } from "./types";

export const mutations: MutationTree<ReductionState> = {
    setReduction(state, payload: Reduction[]) {
        state.reductions = payload
    },
    setReductionMap(state, payload: Map<string, string> | undefined) {
        state.reductionMap = payload
        console.log(state.reductionMap)
    }
};
