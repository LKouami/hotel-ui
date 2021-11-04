import config from "@/config";
import { Bill, SendBillRequestBuilder } from "@/models/butler/Bill";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize, deserialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";
import {Utils} from "@/common/core/utils";

export class BillService extends HttpBaseService {
    private static classInstance?: BillService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): BillService {
        if (!this.classInstance) {
            this.classInstance = new BillService(token);
        }
        return this.classInstance;
    }

    public getAll(): Promise<ApiResponse<Bill[]>> {
        return this.instance.get('bill')
            .then(response => {
                const apiResponse = new ApiResponse<Bill[]>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = Utils.deserializeArray<Bill>(response.data, Bill)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<Bill[]>()
            })
    }

    public sendBill(bill: Bill): Promise<ApiResponse<Bill>> {
        const request: Bill = new SendBillRequestBuilder()
            .b_date(bill.b_date)
            .b_num(bill.b_num )
            .client_id(bill.client_id )
            .user_id("2")
            .createdAt(bill.createdAt)
            .modifiedAt(bill.modifiedAt)
            .build()

        const requestConfig: AxiosRequestConfig = serialize(request)
        console.log(requestConfig)
        const sendUrl: string | null = 'bill'

        return this.instance.post(sendUrl!, requestConfig)
            .then(response => {
                const apiResponse = new ApiResponse<Bill>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = deserialize<Bill>(response.data, Bill)
                        console.log('post réussi')
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                        console.log('post échoué')
                        return new ApiResponse<Bill>()
            })
    }



}
