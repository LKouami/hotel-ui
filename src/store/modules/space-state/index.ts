import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/space-state/space-state-getters";
import {actions} from "@/store/modules/space-state/space-state-actions";
import {mutations} from "@/store/modules/space-state/space-state-mutations";
import {SpaceStateState} from "@/store/modules/space-state/types";

export const state: SpaceStateState = {
    space_state : [],
    space_stateMap: undefined
};

export const space_state: Module<SpaceStateState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
