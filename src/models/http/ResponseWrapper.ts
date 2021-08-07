import {ApiResponse} from "@/models/http/ApiResponse";
import {JsonProperty, Serializable} from "typescript-json-serializer";

@Serializable()
export class ResponseWrapper {

    @JsonProperty('message')
    message: string;

    @JsonProperty('status')
    status: number;
    
    @JsonProperty('message_status')
    statusMessage: string;
    
    @JsonProperty('success')
    private _success: boolean;
    
    @JsonProperty('data')
    private _data: []

    constructor(response: any, message: string) {
        this._data = response.data
        this._success = response.data._success
        this.status = response.status
        this.statusMessage = this._getStatusMessage(this.status)
        this.message = message
    }

    _getStatusMessage(status: number) {
        return '';
    }


    get success(): boolean {
        return this._success;
    }

    set success(value: boolean) {
        this._success = value;
    }


    get data(): any {
        return this._data;
    }

    set data(value: any) {
        this._data = value;
    }
}
