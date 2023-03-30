import{IsNotEmpty ,IsString}from 'class-validator'

export class CreteOrderDTO {
    @IsString()
    @IsNotEmpty()
    client: string;
    @IsString()
    @IsNotEmpty()
    productId: string;
    @IsString()
    @IsNotEmpty()
    address: string
}