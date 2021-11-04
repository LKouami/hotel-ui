import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Bill } from "./Bill";
import { ClientType } from "./ClientType";
import { Reservation } from "./Reservation";

@Serializable()
export class Client extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id!: string;
    
    @JsonProperty({ name: 'name' })
    private _name!: string;

    @JsonProperty({ name: 'email' })
    private _email!: string;

    @JsonProperty({ name: 'nationality' })
    private _nationality!: string;

    @JsonProperty({ name: 'id_card_num' })
    private _id_card_num!: string;

    @JsonProperty({ name: 'phone' })
    private _phone!: string;
    
    @JsonProperty({ name: 'birth_date' })
    private _birth_date!: string;
    
    @JsonProperty({ name: 'under_cover' })
    private _under_cover!: string;
    
    @JsonProperty({ name: 'comments' })
    private _comments!: string;
    
    @JsonProperty({ name: 'user_id' })
    private _user_id!: string;
    
    @JsonProperty({ name: 'creator' })
    private _creator!: string;
    
    @JsonProperty({ name: 'client_type_id' })
    private _client_type_id!: string;

    @JsonProperty({ name: 'client_type', type: ClientType })
    private _client_type: ClientType | undefined;
    
    @JsonProperty({ name: 'bills', type: Bill })
    private _bills: Bill[] | undefined;
    
    @JsonProperty({ name: 'reservations', type: Reservation })
    private _reservations: Reservation[] | undefined;
    
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
    get client_type(): ClientType | undefined {
        return this._client_type;
    }
    set client_type(value: ClientType | undefined) {
        this._client_type = value;
    }
    get bills(): Bill[] | undefined {
        return this._bills;
    }
    set bills(value: Bill[] | undefined) {
        this._bills = value;
    }
    get reservations(): Reservation[] | undefined {
        return this._reservations;
    }
    set reservations(value: Reservation[] | undefined) {
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

export class SendClientRequestBuilder {
    private readonly _sendRequest: Client

    constructor() {
        this._sendRequest = new Client()
    }

    name(name: string): SendClientRequestBuilder {
        this._sendRequest.name = name
        return this
    }

    email(email: string): SendClientRequestBuilder {
        this._sendRequest.email = email
        return this
    }

    nationality(nationality: string): SendClientRequestBuilder {
        this._sendRequest.nationality = nationality
        return this
    }

    id_card_num(id_card_num: string): SendClientRequestBuilder {
        this._sendRequest.id_card_num = id_card_num
        return this
    }

    phone(phone: string): SendClientRequestBuilder {
        this._sendRequest.phone = phone
        return this
    }

    birth_date(birth_date: string): SendClientRequestBuilder {
        this._sendRequest.birth_date = birth_date
        return this
    }

    under_cover(under_cover: string): SendClientRequestBuilder {
        this._sendRequest.under_cover = under_cover
        return this
    }

    comments(comments: string): SendClientRequestBuilder {
        this._sendRequest.comments = comments
        return this
    }

    client_type_id(client_type_id: string): SendClientRequestBuilder {
        this._sendRequest.client_type_id = client_type_id
        return this
    }

    user_id(user_id: string): SendClientRequestBuilder {
        this._sendRequest.user_id = user_id
        return this
    }

    createdAt(createdAt: string): SendClientRequestBuilder {
        this._sendRequest.createdAt = createdAt
        return this
    }

    modifiedAt(modifiedAt: string ): SendClientRequestBuilder {
        this._sendRequest.modifiedAt = modifiedAt
        return this
    }

    build(): Client {
        return this._sendRequest
    }
}
