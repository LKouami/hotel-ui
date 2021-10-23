import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { ClientTypeState } from './types'
import { ClientType } from "@/models/butler/ClientType";


export const getters: GetterTree<ClientTypeState, RootState> = {
    getClientTypes(state): ClientType[]{
        return state.client_type
    },
    getClientTypesMap(state): Map<string, string> | undefined{
        return state.client_typeMap
    },

};
