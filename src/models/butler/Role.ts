import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";

@Serializable()
export class Role extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id: string;
    
    @JsonProperty({ name: 'name' })
    private _name: string;
    
    @JsonProperty({ name: 'users' })
    private _users: string[];
    
    @JsonProperty({ name: 'created_at' })
    private _createdAt: string;

    @JsonProperty({ name: 'modified_at' })
    private _modifiedAt: string;

    constructor(id: string, name: string, users: string[], createdAt: string, modifiedAt: string) {
        super();
        this._id = id;
        this._name = name;
        this._users = users;
        this._createdAt = createdAt;
        this._modifiedAt = modifiedAt;
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
    get users(): string[] {
        return this._users;
    }
    set users(value: string[]) {
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
