export class ClientRegisterDto{
    id:number;
    sharedKey:string;
    businessId:string;
    email:string;
    phone:string;

    constructor(id:number, sharedKey:string, businessId:string, email:string, phone:string) {
        this.id = id;
        this.sharedKey = sharedKey;
        this.businessId = businessId;
        this.email = email;
        this.phone = phone;
    }
}