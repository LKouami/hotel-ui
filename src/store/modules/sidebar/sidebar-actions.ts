import { ActionTree } from 'vuex';
import { SidebarState } from "./types";
import { RootState } from "@/store/types"

export const actions: ActionTree<SidebarState, RootState> = {

    setCurrentSidebarElement(context, payload : string) {
        context.commit('setCurrentSidebarElement', payload)
    }

    

}
