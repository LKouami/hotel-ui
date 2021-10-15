import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Reservation } from "./Reservation";

@Serializable()
export class ToBill extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id: string;

    @JsonProperty({ name: 'begin_date' })
    private _tb_date: string;

    @JsonProperty({ name: 'tb_num' })
    private _tb_num: string;
    
    @JsonProperty({ name: 'amount_to_be_paid' })
    private _amount_to_be_paid: string;
    
    @JsonProperty({ name: 'bill_id' })
    private _bill_id: string;
    
    @JsonProperty({ name: 'bill' })
    private _bill: string;
    
    @JsonProperty({ name: 'reservation_id' })
    private _reservation_id: string;

    @JsonProperty({ name: 'reservation', type: Reservation })
    private _reservation: string;

    @JsonProperty({ name: 'user_id' })
    private _user_id: string;
    
    @JsonProperty({ name: 'created_at' })
    private _createdAt: string;

    @JsonProperty({ name: 'modified_at' })
    private _modifiedAt: string;

    constructor(id: string, tb_date: string, tb_num: string,amount_to_be_paid: string,bill_id: string,bill: string,reservation_id: string,reservation: string, user_id: string,createdAt: string, modifiedAt: string) {
        super();
        this._id = id;
        this._tb_date = tb_date;
        this._tb_num = tb_num;
        this._amount_to_be_paid = amount_to_be_paid;
        this._bill_id = bill_id;
        this._bill = bill;
        this._reservation_id = reservation_id;
        this._reservation = reservation;
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
    get tb_date(): string {
        return this._tb_date;
    }
    set tb_date(value: string) {
        this._tb_date = value;
    }
    get tb_num(): string {
        return this._tb_num;
    }
    set tb_num(value: string) {
        this._tb_num = value;
    }
    get amount_to_be_paid(): string {
        return this._amount_to_be_paid;
    }
    set amount_to_be_paid(value: string) {
        this._amount_to_be_paid = value;
    }
    get bill_id(): string {
        return this._bill_id;
    }
    set bill_id(value: string) {
        this._bill_id = value;
    }
    get bill(): string {
        return this._bill;
    }
    set bill(value: string) {
        this._bill = value;
    }
    get reservation_id(): string {
        return this._reservation_id;
    }
    set reservation_id(value: string) {
        this._reservation_id = value;
    }
    get reservation(): string {
        return this._reservation;
    }
    set reservation(value: string) {
        this._reservation = value;
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
