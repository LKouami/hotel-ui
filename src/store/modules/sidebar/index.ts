import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/sidebar/sidebar-getters";
import {actions} from "@/store/modules/sidebar/sidebar-actions";
import {mutations} from "@/store/modules/sidebar/sidebar-mutations";
import {SidebarState} from "@/store/modules/sidebar/types";

export const state: SidebarState = {
    currentSidebarElement : 'Home'
};

export const sidebar: Module<SidebarState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
