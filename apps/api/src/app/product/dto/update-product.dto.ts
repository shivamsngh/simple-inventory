import { IsString, IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class UpdateProductDto {
    @IsString() @IsNotEmpty()
    id: string
    @IsString() @IsNotEmpty()
    name: string;
    @IsNumberString()
    quantity: number;
    @IsNumberString()
    costPrice: number;
    @IsNumberString()
    sellingPrice: number;
}