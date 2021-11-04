import { ActionTree } from 'vuex';
import { ReductionState } from "./types";
import { RootState } from "@/store/types"
import { ReductionService } from '@/services/reduction.service';
import { Reduction } from '@/models/butler/Reduction';
import { Utils } from '@/common/core/utils';

export const actions: ActionTree<ReductionState, RootState> = {

    retrieveReductions(context) {
        ReductionService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                    const mapBuilded : Map<string, string|unknown> = Utils.buildReductionMap(value.data)
                    context.commit('setReductionMap', mapBuilded)
                   context.commit('setReduction', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
    sendReduction(context, payload : Reduction) {
        const reduction : Reduction = new Reduction()
        reduction.name = payload.name
        reduction.rate = payload.rate
        reduction.createdAt = payload.createdAt
        reduction.modifiedAt = payload.modifiedAt
        reduction.modifiedBy = payload.modifiedBy
        
        console.log(reduction)
        return ReductionService.getInstance('').sendReduction(reduction)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    },
}
