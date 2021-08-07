import {JsonProperty, Serializable} from "typescript-json-serializer";


export class ApiResponse<T> {
    private _data?: T ;
    private _apiError?: ApiError ;


 /*   constructor() {
    }*/

    get data(): T | undefined {
        return this._data;
    }

    set data(value: T | undefined) {
        this._data = value;
    }

    get apiError(): ApiError | undefined{
        return this._apiError;
    }

    set apiError(value: ApiError | undefined) {
        this._apiError = value;
    }
}

@Serializable()
export class ApiError {
    @JsonProperty('code')
    private _errorCode: number;
    @JsonProperty('message')
    private _errorMessage: string


    constructor(errorCode: number, errorMessage: string) {
        this._errorCode = errorCode;
        this._errorMessage = errorMessage;
    }


    get errorCode(): number {
        return this._errorCode;
    }

    set errorCode(value: number) {
        this._errorCode = value;
    }

    get errorMessage(): string {
        return this._errorMessage;
    }

    set errorMessage(value: string) {
        this._errorMessage = value;
    }
}
