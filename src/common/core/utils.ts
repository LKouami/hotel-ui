import { ClientType } from "@/models/butler/ClientType";
import { Role } from "@/models/butler/Role";
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

    static buildClientTypeMap(client_type : ClientType[]): Map<string,  ClientType[]> {
        const ClientTypeMap = new Map()

        client_type.forEach((client_type) => {
            const id = client_type.id
            const name = client_type.name
            ClientTypeMap.set(id, name)
        })

        return ClientTypeMap
        
    }

    

    
}