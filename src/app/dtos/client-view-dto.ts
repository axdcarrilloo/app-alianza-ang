export class ClientViewDto {
    id: number;
    sharedKey: string;
    businessId:string;
    email:string;
    phone:string;
    startDate:Date;
    endDate:Date;

    constructor(id: number, sharedKey: string, businessId:string, email:string,
            phone:string, startDate:Date, endDate:Date) {
        this.id = id;
        this.sharedKey = sharedKey;
        this.businessId = businessId;
        this.email = email;
        this.phone = phone;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}