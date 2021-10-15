import { User } from '@/models/butler/User';
import { MutationTree } from 'vuex';
import { UserState } from "./types";

export const mutations: MutationTree<UserState> = {
    setUser(state, payload: User[]) {
        state.user = payload
    },
};
