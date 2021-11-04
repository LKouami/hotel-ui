import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { ReductionState } from './types'
import { Reduction } from "@/models/butler/Reduction";


export const getters: GetterTree<ReductionState, RootState> = {
    getReductions(state): Reduction[]{
        return state.reductions
    },
    getReductionsMap(state): Map<string, string> | undefined{
        return state.reductionMap
    },

};
