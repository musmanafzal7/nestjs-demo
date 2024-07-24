import { Expose } from "class-transformer";

export class UserDto {

    @Expose()
    id: number;

    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    phone: string;

    @Expose()
    address: string;

    @Expose()
    email: string;

}