import { ClientViewDto } from "./client-view-dto";

export class DataAdvancedSearch {
    actionHidden: Boolean;
    clientViewDto: ClientViewDto;

    constructor(actionHidden: Boolean, clientViewDto: ClientViewDto) {
        this.actionHidden = actionHidden;
        this.clientViewDto = clientViewDto;
    }
}