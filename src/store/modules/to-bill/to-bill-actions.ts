import { ActionTree } from 'vuex';
import { ToBillState } from "./types";
import { RootState } from "@/store/types"
import { ToBillService } from '@/services/to-bill.service';

export const actions: ActionTree<ToBillState, RootState> = {

    retrieveToBills(context) {
        ToBillService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setToBill', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
}
