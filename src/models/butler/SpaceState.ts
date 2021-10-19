import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Client } from "./Client";
import { Space } from "./Space";

@Serializable()
export class SpaceState extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id: string;
    
    @JsonProperty({ name: 'name' })
    private _name: string;
    
    @JsonProperty({ name: 'spaces', type: Space })
    private _spaces: Space[];

    @JsonProperty({ name: 'user_id' })
    private _user_id: string;
    
    @JsonProperty({ name: 'created_at' })
    private _createdAt: string;

    @JsonProperty({ name: 'modified_at' })
    private _modifiedAt: string;

    constructor(id: string, name: string, spaces: Space[], user_id: string,createdAt: string, modifiedAt: string) {
        super();
        this._id = id;
        this._name = name;
        this._spaces = spaces;
        this._user_id = user_id;
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
    get spaces(): Space[] {
        return this._spaces;
    }
    set spaces(value: Space[]) {
        this._spaces = value;
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
