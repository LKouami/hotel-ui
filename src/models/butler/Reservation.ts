import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Client } from "./Client";
import { Reduction } from "./Reduction";
import { Space } from "./Space";
import { ToBill } from "./ToBill";

@Serializable()
export class Reservation extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id: string;
    
    @JsonProperty({ name: 'begin_date' })
    private _begin_date: string;

    @JsonProperty({ name: 'end_date' })
    private _end_date: string;
    
    @JsonProperty({ name: 'comments' })
    private _comments: string;
    
    @JsonProperty({ name: 'reservation_state' })
    private _reservation_state: string;
    
    @JsonProperty({ name: 'client_id' })
    private _client_id: string;
    
    @JsonProperty({ name: 'client', type: Client })
    private _client: Client;
    
    @JsonProperty({ name: 'space_id' })
    private _space_id: string;
    
    @JsonProperty({ name: 'space', type: Space })
    private _space: Space;
    
    @JsonProperty({ name: 'reduction_id' })
    private _reduction_id: string;
    
    @JsonProperty({ name: 'reduction', type: Reduction })
    private _reduction: Reduction;

    @JsonProperty({ name: 'to_bills', type: ToBill })
    private _to_bills: ToBill[];
    
    @JsonProperty({ name: 'created_at' })
    private _createdAt: string;

    @JsonProperty({ name: 'modified_at' })
    private _modifiedAt: string;

    constructor(id: string, begin_date: string, end_date: string,comments: string,reservation_state: string,client_id: string,client: Client,space_id: string,space: Space,reduction_id: string,reduction: Reduction,to_bills: ToBill[], createdAt: string, modifiedAt: string) {
        super();
        this._id = id;
        this._begin_date = begin_date;
        this._end_date = end_date;
        this._comments = comments;
        this._reservation_state = reservation_state;
        this._client_id = client_id;
        this._client = client;
        this._space_id = space_id;
        this._space = space;
        this._reduction_id = reduction_id;
        this._reduction = reduction;
        this._to_bills = to_bills;
        this._createdAt = createdAt;
        this._modifiedAt = modifiedAt;
    }

    get id(): string {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }
    get begin_date(): string {
        return this._begin_date;
    }
    set begin_date(value: string) {
        this._begin_date = value;
    }
    get end_date(): string {
        return this._end_date;
    }
    set end_date(value: string) {
        this._end_date = value;
    }
    get comments(): string {
        return this._comments;
    }
    set comments(value: string) {
        this._comments = value;
    }
    get reservation_state(): string {
        return this._reservation_state;
    }
    set reservation_state(value: string) {
        this._reservation_state = value;
    }
    get client_id(): string {
        return this._client_id;
    }
    set client_id(value: string) {
        this._client_id = value;
    }
    get client(): Client {
        return this._client;
    }
    set client(value: Client) {
        this._client = value;
    }
    get space_id(): string {
        return this._space_id;
    }
    set space_id(value: string) {
        this._space_id = value;
    }
    get space(): Space {
        return this._space;
    }
    set space(value: Space) {
        this._space = value;
    }
    get reduction_id(): string {
        return this._reduction_id;
    }
    set reduction_id(value: string) {
        this._reduction_id = value;
    }
    get reduction(): Reduction {
        return this._reduction;
    }
    set reduction(value: Reduction) {
        this._reduction = value;
    }
    get to_bills(): ToBill[] {
        return this._to_bills;
    }
    set to_bills(value: ToBill[]) {
        this._to_bills = value;
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
