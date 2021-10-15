import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { ToBillState } from './types'
import { ToBill } from "@/models/butler/ToBill";


export const getters: GetterTree<ToBillState, RootState> = {
    getToBills(state): ToBill[]{
        return state.to_bill
    },

};
