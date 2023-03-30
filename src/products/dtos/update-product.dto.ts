import {Length, IsInt, IsString,IsNotEmpty,Min} from 'class-validator'


export class  CreateProductDTO  {
    @Length(10,20)
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    price: number;
    @IsNotEmpty()
    @Length(10,200)
    description: string;
}