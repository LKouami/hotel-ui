import { Client } from '@/models/butler/Client';
import { MutationTree } from 'vuex';
import { ClientState } from "./types";

export const mutations: MutationTree<ClientState> = {
    setClient(state, payload: Client[]) {
        state.client = payload
    },
};
