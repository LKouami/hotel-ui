import { ActionTree } from 'vuex';
import { UserState } from "./types";
import { RootState } from "@/store/types"
import { UserService } from '@/services/user.service';
import { User } from '@/models/butler/User';

export const actions: ActionTree<UserState, RootState> = {

    retrieveUsers(context) {
        UserService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setUser', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },

    sendUser(context, payload : User) {
        const user : User = new User()
        user.name = payload.name
        user.email = payload.email
        user.password = payload.password
        user.role_id = payload.role_id
        user.createdAt = payload.createdAt
        user.modifiedAt = payload.modifiedAt
        
        console.log(user)
        return UserService.getInstance('').sendUser(user)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    }
}
