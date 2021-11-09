import { ActionTree } from 'vuex';
import { ClientState } from "./types";
import { RootState } from "@/store/types"
import { ClientService } from '@/services/client.service';
import { Client } from '@/models/butler/Client';
import { Utils } from '@/common/core/utils';

export const actions: ActionTree<ClientState, RootState> = {

    retrieveClients(context) {
        ClientService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                const mapBuilded : Map<string, string|unknown> = Utils.buildClientMap(value.data)
                context.commit('setClientMap', mapBuilded)
                context.commit('setClient', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
    sendClient(context, payload : Client) {
        const client : Client = new Client()
        client.name = payload.name;
        client.email = payload.email;
        client.nationality = payload.nationality;
        client.birth_date = new Date(payload.birth_date).toISOString();
        client.under_cover = payload.under_cover;
        client.comments = payload.comments;
        client.id_card_num = payload.id_card_num;
        client.client_type_id = payload.client_type_id;
        client.phone = payload.phone;
        client.createdAt = payload.createdAt
        client.modifiedAt = payload.modifiedAt
        
        console.log(client)
        return ClientService.getInstance('').sendClient(client)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    },

    updateClient(context, payload : Client) {
        const client : Client = new Client()
        client.id = payload.id;
        client.name = payload.name;
        client.email = payload.email;
        client.nationality = payload.nationality;
        client.birth_date = new Date(payload.birth_date).toISOString();
        client.under_cover = payload.under_cover;
        client.comments = payload.comments;
        client.id_card_num = payload.id_card_num;
        client.client_type_id = payload.client_type_id;
        client.phone = payload.phone;
        client.createdAt = payload.createdAt
        client.modifiedAt = payload.modifiedAt
        
        console.log(client)
        return ClientService.getInstance('').updateClient(client)
            .then(value => {
                if(value.data) {
                    return value.data
                }
            }).catch(reason => {
                console.log(reason)
            })
    }
}
