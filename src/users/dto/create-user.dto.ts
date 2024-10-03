import { IsString, IsEmail, IsNumber } from "class-validator";

export class createUserDto {

    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    sex: string;

    @IsString()
    title: string;

    @IsString()
    department: string;

    @IsString()
    employment_type: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;


}