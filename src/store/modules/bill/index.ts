import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/bill/bill-getters";
import {actions} from "@/store/modules/bill/bill-actions";
import {mutations} from "@/store/modules/bill/bill-mutations";
import {BillState} from "@/store/modules/bill/types";

export const state: BillState = {
    bill : []
};

export const bill: Module<BillState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
