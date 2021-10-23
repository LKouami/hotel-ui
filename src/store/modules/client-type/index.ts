import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/client-type/client-type-getters";
import {actions} from "@/store/modules/client-type/client-type-actions";
import {mutations} from "@/store/modules/client-type/client-type-mutations";
import {ClientTypeState} from "@/store/modules/client-type/types";

export const state: ClientTypeState = {
    client_type : [],
    client_typeMap: undefined
};

export const client_type: Module<ClientTypeState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
