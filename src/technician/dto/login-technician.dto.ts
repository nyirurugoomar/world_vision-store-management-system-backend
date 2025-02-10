import { IsString, IsNotEmpty, IsNumber } from 'class-validator';


export class LoginTechnicianDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}