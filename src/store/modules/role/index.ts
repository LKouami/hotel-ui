import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/role/role-getters";
import {actions} from "@/store/modules/role/role-actions";
import {mutations} from "@/store/modules/role/role-mutations";
import {RoleState} from "@/store/modules/role/types";

export const state: RoleState = {
    role : [],
    roleMap: undefined
};

export const role: Module<RoleState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
