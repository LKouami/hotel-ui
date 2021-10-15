import { MutationTree } from 'vuex';
import { SidebarState } from "./types";

export const mutations: MutationTree<SidebarState> = {
    setCurrentSidebarElement(state, payload: string){
        state.currentSidebarElement = payload
    }
};
