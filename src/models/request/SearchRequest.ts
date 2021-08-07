import {Request} from "@/models/request/request";
import {SearchOptions} from "@/models/request/SearchOptions";
import {JsonProperty, Serializable} from "typescript-json-serializer";

@Serializable()
export class SearchRequest extends Request {

    @JsonProperty('Sort')
    private _sort: string

    @JsonProperty('direction')
    private _direction: string

    @JsonProperty('pageIndex')
    private _pageIndex: number

    @JsonProperty('pageSize')
    private _pageSize: number

    @JsonProperty({name: 'options', type: SearchOptions})
    private _options? : SearchOptions | undefined


    constructor(sort: string, direction: string, pageIndex: number,pageSize: number, options: SearchOptions | undefined) {
        super();
        this._sort = sort
        this._direction = direction
        this._pageIndex = pageIndex
        this._pageSize = pageSize
        this._options = options;
    }


    get sort(): string {
        return this._sort;
    }

    set sort(value: string) {
        this._sort = value;
    }

    get direction(): string {
        return this._direction;
    }

    set direction(value: string) {
        this._direction = value;
    }

    get pageIndex(): number {
        return this._pageIndex;
    }

    set pageIndex(value: number) {
        this._pageIndex = value;
    }

    get pageSize(): number {
        return this._pageSize;
    }

    set pageSize(value: number) {
        this._pageSize = value;
    }

    get options(): SearchOptions | undefined {
        return this._options;
    }


    set options(value: SearchOptions | undefined) {
        this._options = value;
    }
}

export class SearchRequestBuilder {
    private readonly _searchRequest: SearchRequest

    constructor() {
        this._searchRequest = new SearchRequest('id','asc',1, 1, undefined )
    }

    sort(sort: string): SearchRequestBuilder {
        this._searchRequest.sort = sort
        return this
    }

    direction(direction: string): SearchRequestBuilder {
        this._searchRequest.direction = direction
        return this
    }

    pageIndex(pageIndex: number): SearchRequestBuilder {
        this._searchRequest.pageIndex = pageIndex
        return this
    }

    pageSize(pageSize: number): SearchRequestBuilder {
        this._searchRequest.pageSize = pageSize
        return this
    }

    options(options: SearchOptions): SearchRequestBuilder {
        this._searchRequest.options = options
        return this
    }

    build(): SearchRequest {
        return this._searchRequest
    }
}

