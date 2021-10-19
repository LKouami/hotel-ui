import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Client } from "./Client";
import { Role } from "./Role";

@Serializable()
export class User extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id!: string;
    
    @JsonProperty({ name: 'name' })
    private _name!: string;
    
    @JsonProperty({ name: 'email' })
    private _email!: string;

    @JsonProperty({ name: 'password' })
    private _password!: string;

    @JsonProperty({ name: 'role_id' })
    private _role_id!: string;
    
    @JsonProperty({ name: 'role', type: Role })
    private _role!: Role;
    
    @JsonProperty({ name: 'clients', type: Client })
    private _clients: Client[] | undefined;
    
    @JsonProperty({ name: 'created_at' })
    private _createdAt!: string;

    @JsonProperty({ name: 'modified_at' })
    private _modifiedAt!: string;
    

    constructor() {
        super();
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
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get role_id(): string {
        return this._role_id;
    }
    public set role_id(value: string) {
        this._role_id = value;
    }
    public get role(): Role {
        return this._role;
    }
    public set role(value: Role) {
        this._role = value;
    }
    public get clients(): Client[] | undefined {
        return this._clients;
    }
    public set clients(value: Client[] | undefined) {
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

export class SendUserRequestBuilder {
    private readonly _sendRequest: User

    constructor() {
        this._sendRequest = new User()
    }

    name(name: string): SendUserRequestBuilder {
        this._sendRequest.name = name
        return this
    }

    email(email: string): SendUserRequestBuilder {
        this._sendRequest.email = email
        return this
    }

    password(password: string): SendUserRequestBuilder {
        this._sendRequest.password = password
        return this
    }

    role_id(role_id: string): SendUserRequestBuilder {
        this._sendRequest.role_id = role_id
        return this
    }

    createdAt(createdAt: string): SendUserRequestBuilder {
        this._sendRequest.createdAt = createdAt
        return this
    }

    modifiedAt(modifiedAt: string ): SendUserRequestBuilder {
        this._sendRequest.modifiedAt = modifiedAt
        return this
    }

    build(): User {
        return this._sendRequest
    }
}
