import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Client } from "./Client";

@Serializable()
export class ClientType extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id!: string;
    
    @JsonProperty({ name: 'name' })
    private _name!: string;
    
    @JsonProperty({ name: 'clients', type: Client })
    private _clients: Client[] | undefined;

    @JsonProperty({ name: 'user_id' })
    private _user_id!: string;
    
    @JsonProperty({ name: 'created_at' })
    private _createdAt!: string;

    @JsonProperty({ name: 'modified_at' })
    private _modifiedAt!: string;

    constructor() {
        super();
    }

    get id(): string {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get clients(): Client[] | undefined {
        return this._clients;
    }
    set clients(value: Client[] | undefined) {
        this._clients = value;
    }
    get user_id(): string {
        return this._user_id;
    }
    set user_id(value: string) {
        this._user_id = value;
    }
    get createdAt(): string {
        return this._createdAt;
    }
    set createdAt(value: string) {
        this._createdAt = value;
    }
    get modifiedAt(): string {
        return this._modifiedAt;
    }
    set modifiedAt(value: string) {
        this._modifiedAt = value;
    }
}
export class SendClientTypeRequestBuilder {
    private readonly _sendRequest: ClientType

    constructor() {
        this._sendRequest = new ClientType()
    }

    name(name: string): SendClientTypeRequestBuilder {
        this._sendRequest.name = name
        return this
    }

    user_id(user_id: string): SendClientTypeRequestBuilder {
        this._sendRequest.user_id = user_id
        return this
    }

    createdAt(createdAt: string): SendClientTypeRequestBuilder {
        this._sendRequest.createdAt = createdAt
        return this
    }

    modifiedAt(modifiedAt: string ): SendClientTypeRequestBuilder {
        this._sendRequest.modifiedAt = modifiedAt
        return this
    }

    build(): ClientType {
        return this._sendRequest
    }
}
