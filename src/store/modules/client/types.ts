import { Client } from "@/models/butler/Client";

export interface ClientState {
    client: Client[] 
    clientMap: Map<string, string> | undefined
}
