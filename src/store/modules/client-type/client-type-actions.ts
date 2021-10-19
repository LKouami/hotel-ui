import { ActionTree } from 'vuex';
import { ClientTypeState } from "./types";
import { RootState } from "@/store/types";
import { ClientTypeService } from '@/services/client-type.service';

export const actions: ActionTree<ClientTypeState, RootState> = {

    retrieveClientTypes(context) {
        ClientTypeService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setClientType', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
}
