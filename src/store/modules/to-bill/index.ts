import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/to-bill/to-bill-getters";
import {actions} from "@/store/modules/to-bill/to-bill-actions";
import {mutations} from "@/store/modules/to-bill/to-bill-mutations";
import {ToBillState} from "@/store/modules/to-bill/types";

export const state: ToBillState = {
    to_bill : []
};

export const to_bill: Module<ToBillState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
