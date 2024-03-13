export class ClientRegisterDto{
    businessId:string;
    email:string;
    phone:string;
    startDate:Date;
    endDate:Date;

    constructor(businessId:string, email:string, 
            phone:string, startDate:Date, endDate:Date) {
        this.businessId = businessId;
        this.email = email;
        this.phone = phone;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}