import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { SidebarState } from './types'


export const getters: GetterTree<SidebarState, RootState> = {
    getCurrentSidebarElement:(state) => state.currentSidebarElement
};
