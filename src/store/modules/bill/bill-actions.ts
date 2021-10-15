import { ActionTree } from 'vuex';
import { BillState } from "./types";
import { RootState } from "@/store/types"
import { BillService } from '@/services/bill.service';

export const actions: ActionTree<BillState, RootState> = {

    retrieveBills(context) {
        BillService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setBill', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
}
