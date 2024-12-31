import { IsString, IsNotEmpty, IsNumber, IsDate } from 'class-validator';


export class UpdateItemDto{
    @IsString()
    @IsNotEmpty()
    itemName: string;

    @IsNumber()
    @IsNotEmpty()
    itemQuantity: number;

    @IsNumber()
    @IsNotEmpty()
    itemUnit: number;

    @IsDate()
    @IsNotEmpty()
    itemDate: Date;
}