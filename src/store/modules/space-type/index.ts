import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/space-type/space-type-getters";
import {actions} from "@/store/modules/space-type/space-type-actions";
import {mutations} from "@/store/modules/space-type/space-type-mutations";
import {SpaceTypeState} from "@/store/modules/space-type/types";

export const state: SpaceTypeState = {
    space_type : []
};

export const space_type: Module<SpaceTypeState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
