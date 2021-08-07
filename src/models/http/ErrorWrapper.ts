import {ApiResponse} from "@/models/http/ApiResponse";

export class ErrorWrapper extends Error {
    message: string;
    status: number;
    statusMessage: string;
    private _success: string;
    private _meta: string;
    private _code: string;

    constructor(error: any, message: string) {
        super();
        this._success = error.response ? error.response.data._success : false
        this._meta = error.response ? error.response.data._meta : false
        this._code = error.response ? error.response.data._code : false
        this.status = error.response ? error.response.status : false
        this.statusMessage = this._getStatusMessage(this.status)
        this.message = message || this._getResponseErrorMessage(error)
    }

    _getResponseErrorMessage (error: any) {
        if (error.response && error.response.data) return error.response.data.message
        if (error.response && error.response.statusText) return error.response.statusText
        return error.message === 'Network Error' ? 'Oops! Network Error. Try again later' : error.message
    }

    _getStatusMessage(status: number) {
        return '';
    }


    get success(): string {
        return this._success;
    }

    set success(value: string) {
        this._success = value;
    }

    get meta(): string {
        return this._meta;
    }

    set meta(value: string) {
        this._meta = value;
    }

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }
}
