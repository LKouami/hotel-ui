import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Client } from "./Client";
import { Role } from "./Role";

@Serializable()
export class User extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id: string;
    
    @JsonProperty({ name: 'name' })
    private _name: string;
    
    @JsonProperty({ name: 'email' })
    private _email: string;
    
    @JsonProperty({ name: 'role', type: Role })
    private _role: Role;
    
    @JsonProperty({ name: 'clients', type: Client })
    private _clients: Client[];
    
    @JsonProperty({ name: 'created_at' })
    private _createdAt: string;

    @JsonProperty({ name: 'modified_at' })
    private _modifiedAt: string;
    

    constructor(id: string, name: string, email: string, role: Role, clients:Client[],  createdAt: string, modifiedAt: string) {
        super();
        this._id = id;
        this._name = name;
        this._email = email;
        this._role = role;
        this._clients = clients;
        this._createdAt = createdAt;
        this._modifiedAt = modifiedAt;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get role(): Role {
        return this._role;
    }
    public set role(value: Role) {
        this._role = value;
    }
    public get clients(): Client[] {
        return this._clients;
    }
    public set clients(value: Client[]) {
        this._clients = value;
    }
    public get createdAt(): string {
        return this._createdAt;
    }
    public set createdAt(value: string) {
        this._createdAt = value;
    }
    public get modifiedAt(): string {
        return this._modifiedAt;
    }
    public set modifiedAt(value: string) {
        this._modifiedAt = value;
    }

    
}
