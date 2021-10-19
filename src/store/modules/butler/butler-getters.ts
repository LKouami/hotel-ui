import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { ButlerState } from './types'
import { Role } from "@/models/butler/Role";


export const getters: GetterTree<ButlerState, RootState> = {
    getRoles(state): Role[]{
        return state.role
    },
    getIsModalVisible(state): boolean{
        return state.isModalVisible
    }

};
