import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { BillState } from './types'
import { Bill } from "@/models/butler/Bill";


export const getters: GetterTree<BillState, RootState> = {
    getBills(state): Bill[]{
        return state.bill
    },

};
