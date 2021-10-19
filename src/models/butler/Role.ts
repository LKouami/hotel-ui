import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Request } from "../request/request";

@Serializable()
export class Role extends Request {
    
    @JsonProperty({ name: 'id' })
    private _id!: string;
    
    @JsonProperty({ name: 'name' })
    private _name!: string;
    
    @JsonProperty({ name: 'users' })
    private _users: string[] | undefined;
    
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
    get users(): string[] | undefined {
        return this._users;
    }
    set users(value: string[] | undefined) {
        this._users = value;
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

export class SendRoleRequestBuilder {
    private readonly _sendRequest: Role

    constructor() {
        this._sendRequest = new Role()
    }

    name(name: string): SendRoleRequestBuilder {
        this._sendRequest.name = name
        return this
    }

    createdAt(createdAt: string): SendRoleRequestBuilder {
        this._sendRequest.createdAt = createdAt
        return this
    }

    modifiedAt(modifiedAt: string ): SendRoleRequestBuilder {
        this._sendRequest.modifiedAt = modifiedAt
        return this
    }

    build(): Role {
        return this._sendRequest
    }
}
