import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTechnicianDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    occupation: string;

    @IsNumber()
    @IsNotEmpty()
    contactNumber: number;

    @IsString()
    @IsNotEmpty()
    password: string;
}