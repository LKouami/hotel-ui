import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { SpaceState } from './types'
import { Space } from "@/models/butler/Space";


export const getters: GetterTree<SpaceState, RootState> = {
    getSpaces(state): Space[]{
        return state.space
    },

};
