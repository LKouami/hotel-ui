import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/client/client-getters";
import {actions} from "@/store/modules/client/client-actions";
import {mutations} from "@/store/modules/client/client-mutations";
import {ClientState} from "@/store/modules/client/types";

export const state: ClientState = {
    client : [],
    clientMap: undefined
};

export const client: Module<ClientState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
