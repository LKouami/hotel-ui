import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/butler/butler-getters";
import {actions} from "@/store/modules/butler/butler-actions";
import {mutations} from "@/store/modules/butler/butler-mutations";
import {ButlerState} from "@/store/modules/butler/types";

export const state: ButlerState = {
    role : []
};

export const butler: Module<ButlerState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
