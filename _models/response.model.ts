export class ResponseModel {
    Result: any;
    Message: string;
    Payload: any;
    AdditionalMessage?: string|null;
	Success?: boolean;

    constructor(response: any = {}) {
        this.Result = response.ok ? response.data.Result : 0;
        this.Message = response.ok ? response.data.Message : response.data ? response.data.MessageDetail : "An unexpected error occurred.";
        this.Payload = response.ok ? response.data.Payload : null;
        this.AdditionalMessage = response.ok ? this.additionalMessage(this.Result) : null;
		this.Success = response.ok ? response.data.Result == 1 ? true : false : false
    }

    additionalMessage(Result: number) {
        switch(Result) {
            case 1:
                return null;
            case -10:
                return null;
        }
    }
}