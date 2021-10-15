import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { ClientState } from './types'
import { Client } from "@/models/butler/Client";


export const getters: GetterTree<ClientState, RootState> = {
    getClients(state): Client[]{
        return state.client
    },

};
