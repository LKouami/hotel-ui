import { Client } from '@/models/butler/Client';
import { MutationTree } from 'vuex';
import { ClientState } from "./types";

export const mutations: MutationTree<ClientState> = {
    setClient(state, payload: Client[]) {
        state.client = payload
    },
    setClientMap(state, payload: Map<string, string> | undefined) {
        state.clientMap = payload
        console.log(state.clientMap)
    }
};
