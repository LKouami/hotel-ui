import { ToBill } from '@/models/butler/ToBill';
import { MutationTree } from 'vuex';
import { ToBillState } from "./types";

export const mutations: MutationTree<ToBillState> = {
    setToBill(state, payload: ToBill[]) {
        state.to_bill = payload
    },
};
