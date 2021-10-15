import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/user/user-getters";
import {actions} from "@/store/modules/user/user-actions";
import {mutations} from "@/store/modules/user/user-mutations";
import {UserState} from "@/store/modules/user/types";

export const state: UserState = {
    user : []
};

export const user: Module<UserState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
