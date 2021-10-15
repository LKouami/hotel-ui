import { ActionTree } from 'vuex';
import { ClientState } from "./types";
import { RootState } from "@/store/types"
import { ClientService } from '@/services/client.service';

export const actions: ActionTree<ClientState, RootState> = {

    retrieveClients(context) {
        ClientService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setClient', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
}
