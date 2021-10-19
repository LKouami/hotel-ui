import { Role } from '@/models/butler/Role';
import { MutationTree } from 'vuex';
import { ButlerState } from "./types";

export const mutations: MutationTree<ButlerState> = {
    setRole(state, payload: Role[]) {
        state.role = payload
    },
};
