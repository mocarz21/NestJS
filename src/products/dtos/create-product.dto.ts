import {Length, IsInt, IsString,IsNotEmpty,Min} from 'class-validator'
import { isString } from 'class-validator/types/decorator/decorators';
import { Transform } from 'class-transformer';

export class  CreateProductDTO  {
    @Length(10,20)
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @Transform(({ value }) => parseInt(value))
    @IsInt()
    @Min(0)
    price: number;
    @IsNotEmpty()
    @Length(10,200)
    description: string;
}