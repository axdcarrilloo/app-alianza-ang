export class MainResponseDto {
    mesagge: string;
    response: any;

    constructor(mesagge: string, response: any) {
        this.mesagge = mesagge;
        this.response = response;
    }
}