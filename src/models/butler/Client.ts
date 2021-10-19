import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Bill } from "./Bill";
import { ClientType } from "./ClientType";
import { Reservation } from "./Reservation";

@Serializable()
export class Client extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id: string;
    
    @JsonProperty({ name: 'name' })
    private _name: string;

    @JsonProperty({ name: 'email' })
    private _email: string;

    @JsonProperty({ name: 'nationality' })
    private _nationality: string;

    @JsonProperty({ name: 'id_card_num' })
    private _id_card_num: string;

    @JsonProperty({ name: 'phone' })
    private _phone: string;
    
    @JsonProperty({ name: 'birth_date' })
    private _birth_date: string;
    
    @JsonProperty({ name: 'under_cover' })
    private _under_cover: string;
    
    @JsonProperty({ name: 'comments' })
    private _comments: string;
    
    @JsonProperty({ name: 'user_id' })
    private _user_id: string;
    
    @JsonProperty({ name: 'creator' })
    private _creator: string;
    
    @JsonProperty({ name: 'client_type_id' })
    private _client_type_id: string;

    @JsonProperty({ name: 'client_type', type: ClientType })
    private _client_type: ClientType;
    
    @JsonProperty({ name: 'bills', type: Bill })
    private _bills: Bill[];
    
    @JsonProperty({ name: 'reservations', type: Reservation })
    private _reservations: Reservation[];
    
    @JsonProperty({ name: 'created_at' })
    private _createdAt: string;

    @JsonProperty({ name: 'modified_at' })
    private _modifiedAt: string;

    constructor(id: string, name: string, email: string,nationality: string,id_card_num: string,phone: string,birth_date: string,under_cover: string,comments: string,user_id: string,creator: string,client_type_id: string,client_type: ClientType,bills: Bill[],reservations: Reservation[], createdAt: string, modifiedAt: string) {
        super();
        this._id = id;
        this._name = name;
        this._email = email;
        this._nationality = nationality;
        this._id_card_num = id_card_num;
        this._phone = phone;
        this._birth_date = birth_date;
        this._under_cover = under_cover;
        this._comments = comments;
        this._user_id = user_id;
        this._creator = creator;
        this._client_type_id = client_type_id;
        this._client_type = client_type;
        this._bills = bills;
        this._reservations = reservations;
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
    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }
    get nationality(): string {
        return this._nationality;
    }
    set nationality(value: string) {
        this._nationality = value;
    }
    get id_card_num(): string {
        return this._id_card_num;
    }
    set id_card_num(value: string) {
        this._id_card_num = value;
    }
    get phone(): string {
        return this._phone;
    }
    set phone(value: string) {
        this._phone = value;
    }
    get birth_date(): string {
        return this._birth_date;
    }
    set birth_date(value: string) {
        this._birth_date = value;
    }
    get under_cover(): string {
        return this._under_cover;
    }
    set under_cover(value: string) {
        this._under_cover = value;
    }
    get comments(): string {
        return this._comments;
    }
    set comments(value: string) {
        this._comments = value;
    }
    get user_id(): string {
        return this._user_id;
    }
    set user_id(value: string) {
        this._user_id = value;
    }
    get creator(): string {
        return this._creator;
    }
    set creator(value: string) {
        this._creator = value;
    }
    get client_type_id(): string {
        return this._client_type_id;
    }
    set client_type_id(value: string) {
        this._client_type_id = value;
    }
    get client_type(): ClientType {
        return this._client_type;
    }
    set client_type(value: ClientType) {
        this._client_type = value;
    }
    get bills(): Bill[] {
        return this._bills;
    }
    set bills(value: Bill[]) {
        this._bills = value;
    }
    get reservations(): Reservation[] {
        return this._reservations;
    }
    set reservations(value: Reservation[]) {
        this._reservations = value;
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
