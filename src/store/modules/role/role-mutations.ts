import { Role } from '@/models/butler/Role';
import { MutationTree } from 'vuex';
import { RoleState } from "./types";

export const mutations: MutationTree<RoleState> = {
    setRole(state, payload: Role[]) {
        state.role = payload
    },
};
