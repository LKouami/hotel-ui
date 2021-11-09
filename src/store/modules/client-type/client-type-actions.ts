import { ActionTree } from 'vuex';
import { ClientTypeState } from "./types";
import { RootState } from "@/store/types";
import { ClientTypeService } from '@/services/client-type.service';
import { ClientType } from '@/models/butler/ClientType';
import { Utils } from '@/common/core/utils';

export const actions: ActionTree<ClientTypeState, RootState> = {

    retrieveClientTypes(context) {
        ClientTypeService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                    const mapBuilded : Map<string, string|unknown> = Utils.buildClientTypeMap(value.data)
                    context.commit('setClientTypeMap', mapBuilded)
                   context.commit('setClientType', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },

    sendClientType(context, payload : ClientType) {
        const client_type : ClientType = new ClientType()
        client_type.name = payload.name
        client_type.user_id = payload.user_id
        client_type.createdAt = payload.createdAt
        client_type.modifiedAt = payload.modifiedAt
        
        console.log(client_type)
        return ClientTypeService.getInstance('').sendClientType(client_type)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    },

    updateClientType(context, payload : ClientType) {
        const client_type : ClientType = new ClientType()
        client_type.name = payload.name
        client_type.user_id = payload.user_id
        client_type.id = payload.id
        client_type.createdAt = payload.createdAt
        client_type.modifiedAt = payload.modifiedAt
        
        console.log(client_type)
        return ClientTypeService.getInstance('').updateClientType(client_type)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    }
}
