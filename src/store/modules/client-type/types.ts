import { ClientType } from "@/models/butler/ClientType";

export interface ClientTypeState {
    client_type: ClientType[] 
    client_typeMap: Map<string, string> | undefined
}
