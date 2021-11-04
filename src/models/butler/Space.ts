import {BaseModel} from "@/models/BaseModel";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { Client } from "./Client";
import { Reservation } from "./Reservation";
import { SpaceState } from "./SpaceState";
import { SpaceType } from "./SpaceType";

@Serializable()
export class Space extends BaseModel {
    
    @JsonProperty({ name: 'id' })
    private _id!: string;
    
    @JsonProperty({ name: 'name' })
    private _name!: string;

    @JsonProperty({ name: 'location' })
    private _location!: string;
    
    @JsonProperty({ name: 'price' })
    private _price!: string;

    @JsonProperty({ name: 'comments' })
    private _comments!: string;
    
    @JsonProperty({ name: 'space_type_id' })
    private _space_type_id!: string;

    @JsonProperty({ name: 'space_type', type: SpaceType })
    private _space_type: SpaceType | undefined;
    
    @JsonProperty({ name: 'space_state_id' })
    private _space_state_id!: string;
    
    @JsonProperty({ name: 'space_state', type: SpaceState })
    private _space_state: SpaceState | undefined;
    
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
    public get location(): string {
        return this._location;
    }
    public set location(value: string) {
        this._location = value;
    }
    public get price(): string {
        return this._price;
    }
    public set price(value: string) {
        this._price = value;
    }
    public get comments(): string {
        return this._comments;
    }
    public set comments(value: string) {
        this._comments = value;
    }
    public get space_type_id(): string {
        return this._space_type_id;
    }
    public set space_type_id(value: string) {
        this._space_type_id = value;
    }
    public get space_type(): SpaceType | undefined {
        return this._space_type;
    }
    public set space_type(value: SpaceType | undefined) {
        this._space_type = value;
    }
    public get space_state_id(): string {
        return this._space_state_id;
    }
    public set space_state_id(value: string) {
        this._space_state_id = value;
    }
    public get space_state(): SpaceState | undefined {
        return this._space_state;
    }
    public set space_state(value: SpaceState | undefined) {
        this._space_state = value;
    }
    public get reservations(): Reservation[] | undefined {
        return this._reservations;
    }
    public set reservations(value: Reservation[] | undefined) {
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

export class SendSpaceRequestBuilder {
    private readonly _sendRequest: Space

    constructor() {
        this._sendRequest = new Space()
    }

    name(name: string): SendSpaceRequestBuilder {
        this._sendRequest.name = name
        return this
    }

    location(location: string): SendSpaceRequestBuilder {
        this._sendRequest.location = location
        return this
    }
    
    price(price: string): SendSpaceRequestBuilder {
        this._sendRequest.price = price
        return this
    }

    comments(comments: string): SendSpaceRequestBuilder {
        this._sendRequest.comments = comments
        return this
    }

    space_type_id(space_type_id: string): SendSpaceRequestBuilder {
        this._sendRequest.space_type_id = space_type_id
        return this
    }

    space_state_id(space_state_id: string): SendSpaceRequestBuilder {
        this._sendRequest.space_state_id = space_state_id
        return this
    }

    user_id(user_id: string): SendSpaceRequestBuilder {
        this._sendRequest.user_id = user_id
        return this
    }

    createdAt(createdAt: string): SendSpaceRequestBuilder {
        this._sendRequest.createdAt = createdAt
        return this
    }

    modifiedAt(modifiedAt: string ): SendSpaceRequestBuilder {
        this._sendRequest.modifiedAt = modifiedAt
        return this
    }

    modifiedBy(modifiedBy: string ): SendSpaceRequestBuilder {
        this._sendRequest.modifiedBy = modifiedBy
        return this
    }

    build(): Space {
        return this._sendRequest
    }
}
