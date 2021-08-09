import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";

@Serializable()
export class AffectationMateriel extends BaseModel {
    
    @JsonProperty({name:'id'})
    private _id: string
    
    @JsonProperty({name:'tenant'})
    private _tenant: string

    @JsonProperty({name:'box_id'})
    private _boxId: string

    @JsonProperty({name:'email'})
    private _email: string

    @JsonProperty({name:'display_name'})
    private _displayName: string

    @JsonProperty({name:'tags'})
    private _tags: string[]


    constructor(id: string, tenant: string, boxId: string, email: string, displayName: string, tags: string[]) {
        super();
        this._id = id;
        this._tenant = tenant;
        this._boxId = boxId;
        this._email = email;
        this._displayName = displayName;
        this._tags = tags;
    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get tenant(): string {
        return this._tenant;
    }

    set tenant(value: string) {
        this._tenant = value;
    }

    get boxId(): string {
        return this._boxId;
    }

    set boxId(value: string) {
        this._boxId = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get displayName(): string {
        return this._displayName;
    }

    set displayName(value: string) {
        this._displayName = value;
    }

    get tags(): string[] {
        return this._tags;
    }

    set tags(value: string[]) {
        this._tags = value;
    }
}
