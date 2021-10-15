import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/space/space-getters";
import {actions} from "@/store/modules/space/space-actions";
import {mutations} from "@/store/modules/space/space-mutations";
import {SpaceState} from "@/store/modules/space/types";

export const state: SpaceState = {
    space : []
};

export const space: Module<SpaceState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
