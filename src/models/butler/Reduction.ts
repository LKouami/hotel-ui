import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Reservation } from "./Reservation";

@Serializable()
export class Reduction extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id!: string;
    
    @JsonProperty({ name: 'name' })
    private _name!: string;
    
    @JsonProperty({ name: 'rate' })
    private _rate!: string;
    
    @JsonProperty({ name: 'reservations', type: Reservation })
    private _reservations: Reservation[] | undefined;

    @JsonProperty({ name: 'user_id' })
    private _user_id!: string;
    
    @JsonProperty({ name: 'created_at' })
    private _createdAt!: string;

    @JsonProperty({ name: 'modified_at' })
    private _modifiedAt!: string;

    @JsonProperty({ name: 'modified_by' })
    private _modifiedBy!: string;
    

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
    get rate(): string {
        return this._rate;
    }
    set rate(value: string) {
        this._rate = value;
    }
    get reservations(): Reservation[] | undefined {
        return this._reservations;
    }
    set reservations(value: Reservation[] | undefined) {
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
export class SendReductionRequestBuilder {
    private readonly _sendRequest: Reduction

    constructor() {
        this._sendRequest = new Reduction()
    }

    name(name: string): SendReductionRequestBuilder {
        this._sendRequest.name = name
        return this
    }
    
    rate(rate: string): SendReductionRequestBuilder {
        this._sendRequest.rate = rate
        return this
    }

    user_id(user_id: string): SendReductionRequestBuilder {
        this._sendRequest.user_id = user_id
        return this
    }

    createdAt(createdAt: string): SendReductionRequestBuilder {
        this._sendRequest.createdAt = createdAt
        return this
    }

    modifiedAt(modifiedAt: string ): SendReductionRequestBuilder {
        this._sendRequest.modifiedAt = modifiedAt
        return this
    }

    modifiedBy(modifiedBy: string ): SendReductionRequestBuilder {
        this._sendRequest.modifiedBy = modifiedBy
        return this
    }

    build(): Reduction {
        return this._sendRequest
    }
}
