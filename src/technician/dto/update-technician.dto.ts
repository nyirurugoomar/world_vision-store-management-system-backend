import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateTechnicianDto{
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