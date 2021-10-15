import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { SpaceStateState } from './types'
import { SpaceState } from "@/models/butler/SpaceState";


export const getters: GetterTree<SpaceStateState, RootState> = {
    getSpaceStates(state): SpaceState[]{
        return state.space_state
    },

};
