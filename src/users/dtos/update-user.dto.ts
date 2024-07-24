import { IsEmail, IsString, IsOptional } from "class-validator";

export class UpdateUserDto{

    @IsString()
    @IsOptional()
    firstName:string;
    
    @IsString()
    @IsOptional()
    lastName:string;
    
    @IsString()
    @IsOptional()
    phone:string;
    
    @IsString()
    @IsOptional()
    address:string;

    @IsEmail()
    @IsOptional()
    email:string;

    @IsString()
    @IsOptional()
    password:string;
}