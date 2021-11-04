import { ClientType } from "@/models/butler/ClientType";
import { Client } from "@/models/butler/Client";
import { Reduction } from "@/models/butler/Reduction";
import { Role } from "@/models/butler/Role";
import { SpaceState } from "@/models/butler/SpaceState";
import { SpaceType } from "@/models/butler/SpaceType";
import { deserialize } from "typescript-json-serializer";

export class Utils {
    static deserializeArray<T>(data: [], type: any): Array<T> {
        const items: Array<T> = []
        data.forEach(function (value) {
            const object = deserialize<T>(value, type)
            items.push(object)
        })
        return items;
    }

    static sortByDate(messagesView : any) {
        let sortedMessages : any = []
            sortedMessages =  messagesView.slice().sort((a,b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          });
          return sortedMessages
    }

    static buildRoleMap(role : Role[]): Map<string,  Role[]> {
        const RoleMap = new Map()

        role.forEach((role) => {
            const id = role.id
            const name = role.name
            RoleMap.set(id, name)
        })

        return RoleMap
        
    }

    static buildSpaceTypeMap(space_type : SpaceType[]): Map<string,  SpaceType[]> {
        const SpaceTypeMap = new Map()

        space_type.forEach((space_type) => {
            const id = space_type.id
            const name = space_type.name
            SpaceTypeMap.set(id, name)
        })

        return SpaceTypeMap
        
    }

    static buildSpaceStateMap(space_state : SpaceState[]): Map<string,  SpaceState[]> {
        const SpaceStateMap = new Map()

        space_state.forEach((space_state) => {
            const id = space_state.id
            const name = space_state.name
            SpaceStateMap.set(id, name)
        })

        return SpaceStateMap
        
    }

    static buildReductionMap(reduction : Reduction[]): Map<string,  Reduction[]> {
        const ReductionMap = new Map()

        reduction.forEach((reduction) => {
            const id = reduction.id
            const name = reduction.name
            ReductionMap.set(id, name)
        })

        return ReductionMap
        
    }

    static buildClientTypeMap(client_type : ClientType[]): Map<string,  ClientType[]> {
        const ClientTypeMap = new Map()

        client_type.forEach((client_type) => {
            const id = client_type.id
            const name = client_type.name
            ClientTypeMap.set(id, name)
        })

        return ClientTypeMap
        
    }

    static buildClientMap(client : Client[]): Map<string,  Client[]> {
        const ClientMap = new Map()

        client.forEach((client) => {
            const id = client.id
            const name = client.name
            ClientMap.set(id, name)
        })

        return ClientMap
        
    }

    

    
}