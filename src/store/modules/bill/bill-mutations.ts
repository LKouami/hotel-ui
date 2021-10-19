import { Bill } from '@/models/butler/Bill';
import { MutationTree } from 'vuex';
import { BillState } from "./types";

export const mutations: MutationTree<BillState> = {
    setBill(state, payload: Bill[]) {
        state.bill = payload
    },
};
