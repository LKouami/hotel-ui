import { ClientType } from '@/models/butler/ClientType';
import { MutationTree } from 'vuex';
import { ClientTypeState } from "./types";

export const mutations: MutationTree<ClientTypeState> = {
    setClientType(state, payload: ClientType[]) {
        state.client_type = payload
    },

    setClientTypeMap(state, payload: Map<string, string> | undefined) {
        state.client_typeMap = payload
        console.log(state.client_typeMap)
    }
};
