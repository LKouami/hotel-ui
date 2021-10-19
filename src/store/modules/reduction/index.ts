import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/reduction/reduction-getters";
import {actions} from "@/store/modules/reduction/reduction-actions";
import {mutations} from "@/store/modules/reduction/reduction-mutations";
import {ReductionState} from "@/store/modules/reduction/types";

export const state: ReductionState = {
    reductions : []
};

export const reduction: Module<ReductionState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
