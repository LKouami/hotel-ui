import { ActionTree } from 'vuex';
import { BillState } from "./types";
import { RootState } from "@/store/types"
import { BillService } from '@/services/bill.service';
import { Bill } from '@/models/butler/Bill';

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

    sendBill(context, payload : Bill) {
        const bill : Bill = new Bill()
        bill.b_date = payload.b_date;
        bill.b_num = payload.b_num;
        bill.client_id = payload.client_id;
        bill.user_id = payload.user_id;
        bill.createdAt = payload.createdAt
        bill.modifiedAt = payload.modifiedAt
        
        console.log(bill)
        return BillService.getInstance('').sendBill(bill)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    }
}
