import {BaseModel} from "@/models/BaseModel";
import {JsonProperty, Serializable} from "typescript-json-serializer";

@Serializable()
export class SearchOptions extends BaseModel {

    @JsonProperty({name: 'page_size'})
    private _pageSize: number

    @JsonProperty({name: 'start_index'})
    private _startIndex: string

    @JsonProperty({name: 'order_by'})
    private _orderBy: string

    @JsonProperty({name: 'order_by_field'})
    private _orderByField: string

    constructor(pageSize: number, startIndex: string, orderBy: string, orderByField: string) {
        super();
        this._pageSize = pageSize;
        this._startIndex = startIndex;
        this._orderBy = orderBy;
        this._orderByField = orderByField;
    }

    get pageSize(): number {
        return this._pageSize;
    }

    set pageSize(value: number) {
        this._pageSize = value;
    }

    get startIndex(): string {
        return this._startIndex;
    }

    set startIndex(value: string) {
        this._startIndex = value;
    }

    get orderBy(): string {
        return this._orderBy;
    }

    set orderBy(value: string) {
        this._orderBy = value;
    }

    get orderByField(): string {
        return this._orderByField;
    }

    set orderByField(value: string) {
        this._orderByField = value;
    }
}
