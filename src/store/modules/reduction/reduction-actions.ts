import { ActionTree } from 'vuex';
import { ReductionState } from "./types";
import { RootState } from "@/store/types"
import { ReductionService } from '@/services/reduction.service';

export const actions: ActionTree<ReductionState, RootState> = {

    retrieveReductions(context) {
        ReductionService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setReduction', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
}
