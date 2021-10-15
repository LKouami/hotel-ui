import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Reservation } from "./Reservation";

@Serializable()
export class Reduction extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id: string;
    
    @JsonProperty({ name: 'name' })
    private _name: string;
    
    @JsonProperty({ name: 'rate' })
    private _rate: string;
    
    @JsonProperty({ name: 'reservations', type: Reservation })
    private _reservations: Reservation[];

    @JsonProperty({ name: 'user_id' })
    private _user_id: string;
    
    @JsonProperty({ name: 'created_at' })
    private _createdAt: string;

    @JsonProperty({ name: 'modified_at' })
    private _modifiedAt: string;

    @JsonProperty({ name: 'modified_by' })
    private _modifiedBy: string;
    

    constructor(id: string, name: string, rate: string, reservations: Reservation[],createdAt: string,user_id: string, modifiedAt: string,modifiedBy: string) {
        super();
        this._id = id;
        this._name = name;
        this._rate = rate;
        this._reservations = reservations;
        this._user_id = user_id;
        this._createdAt = createdAt;
        this._modifiedAt = modifiedAt;
        this._modifiedBy = modifiedBy;
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
    get rate(): string {
        return this._rate;
    }
    set rate(value: string) {
        this._rate = value;
    }
    get reservations(): Reservation[] {
        return this._reservations;
    }
    set reservations(value: Reservation[]) {
        this._reservations = value;
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
    get modifiedBy(): string {
        return this._modifiedBy;
    }
    set modifiedBy(value: string) {
        this._modifiedBy = value;
    }
    
}
