import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { UserState } from './types'
import { User } from "@/models/butler/User";


export const getters: GetterTree<UserState, RootState> = {
    getUsers(state): User[]{
        return state.user
    },

};
