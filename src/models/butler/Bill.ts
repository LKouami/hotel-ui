import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Client } from "./Client";
import { ToBill } from "./ToBill";

@Serializable()
export class Bill extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id!: string;
    
    @JsonProperty({ name: 'b_date' })
    private _b_date!: string;

    @JsonProperty({ name: 'b_num' })
    private _b_num!: string;
    
    @JsonProperty({ name: 'client_id' })
    private _client_id!: string;
    
    @JsonProperty({ name: 'client', type: Client })
    private _client: Client | undefined;
    
    @JsonProperty({ name: 'to_bills', type: ToBill })
    private _to_bills: ToBill[] | undefined;
    
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
    get b_date(): string {
        return this._b_date;
    }
    set b_date(value: string) {
        this._b_date = value;
    }
    get b_num(): string {
        return this._b_num;
    }
    set b_num(value: string) {
        this._b_num = value;
    }
    get client_id(): string {
        return this._client_id;
    }
    set client_id(value: string) {
        this._client_id = value;
    }
    get client(): Client | undefined {
        return this._client;
    }
    set client(value: Client | undefined) {
        this._client = value;
    }
    get to_bills(): ToBill[] | undefined {
        return this._to_bills;
    }
    set to_bills(value: ToBill[] | undefined) {
        this._to_bills = value;
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
export class SendBillRequestBuilder {
    private readonly _sendRequest: Bill

    constructor() {
        this._sendRequest = new Bill()
    }

    b_date(b_date: string): SendBillRequestBuilder {
        this._sendRequest.b_date = b_date
        return this
    }

    b_num(b_num: string): SendBillRequestBuilder {
        this._sendRequest.b_num = b_num
        return this
    }
    
    client_id(client_id: string): SendBillRequestBuilder {
        this._sendRequest.client_id = client_id
        return this
    }

    user_id(user_id: string): SendBillRequestBuilder {
        this._sendRequest.user_id = user_id
        return this
    }

    createdAt(createdAt: string): SendBillRequestBuilder {
        this._sendRequest.createdAt = createdAt
        return this
    }

    modifiedAt(modifiedAt: string ): SendBillRequestBuilder {
        this._sendRequest.modifiedAt = modifiedAt
        return this
    }

    build(): Bill {
        return this._sendRequest
    }
}
